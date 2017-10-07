import { Component } from '@angular/core';
import { Contact } from './shared/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'contactList';
  selectedContact: Contact;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  handleContactSelection(contact) {
    this.loadedFeature = 'detailView';
    this.selectedContact = contact;
  }
}
