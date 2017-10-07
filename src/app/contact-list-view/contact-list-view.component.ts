import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterContentInit
} from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactListService } from './contact-list.service';

@Component({
  selector: 'app-contact-list-view',
  providers: [ContactListService],
  templateUrl: './contact-list-view.component.html',
  styleUrls: ['./contact-list-view.component.css']
})
export class ContactListViewComponent implements 
  OnInit,
  AfterContentInit {

  @Output() contactWasSelected = new EventEmitter<Contact>();

  constructor(private _contactListService: ContactListService) {}
  errorMessage: string;

  contacts: Contact[] = [
    new Contact(
      'Alex Matranga',
      0,
      'React Developer',
      true,
      '',
      '',
      'amatranga892@gmail.com',
      'August',
      '',
      '',
      '630-303-3706',
      'Folsom',
      'San Francisco',
      'CA',
      'USA',
      '94107')
  ];
  favorites: Contact[] = [];
  others: Contact[] = [];

  ngOnInit(): void {
    this._contactListService.getContactList()
    //  .retry(3)
      .subscribe(
        contacts => {
          this.contacts = contacts['data'];
        },
        error => this.errorMessage = <any>error
      );
  }

  ngAfterContentInit() {
    this.contacts.sort((a, b) => a.id - b.id);
    this.contacts.forEach(contact =>
      contact.isFavorite ? this.favorites.push(contact) : this.others.push(contact)
    );
  }

  onContactSelected(contact: Contact) {
    this.contactWasSelected.emit(contact);
  }
}
