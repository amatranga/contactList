import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.css']
})
export class ContactDetailViewComponent implements OnInit, DoCheck {

  @Input() contact: Contact;
  @Output() favoriteToggled = new EventEmitter<{updatedFavoriteStatus: boolean}>();

  name = '';
  compnayName = '';
  smallImageUrl = '';
  largeImageUrl = '';
  home = '';
  mobile = '';
  work = '';
  street = '';
  email = '';
  birthdate = '';
  cityStateCountryZip = '';
  isFavorite;
  favorite;
  canToggleFavorite = false;

  constructor() {
    setTimeout(() => {
      this.canToggleFavorite = true;
    }, 500);
  }

  ngOnInit() {
    this.name = this.contact.name;
    this.compnayName = this.contact.companyName;
    this.smallImageUrl = this.contact.smallImageUrl;
    this.largeImageUrl = this.contact.largeImageUrl;
    this.home = this.contact.phoneHome;
    this.mobile = this.contact.phoneMobile;
    this.work = this.contact.phoneWork;
    this.street = this.contact.addressStreet;
    this.email = this.contact.emailAddress;
    this.birthdate = this.contact.birthDate;
    this.cityStateCountryZip =
      this.contact.addressCity + ', ' + this.contact.addressState + ' ' + this.contact.addressCountry + ' ' + this.contact.addressZipCode;
    this.isFavorite = this.contact.isFavorite;
  }

  ngDoCheck() {
    if (this.isFavorite) {
      this.favorite = 'assets/FavoriteTrue/FavoriteTrueSm.png';
    } else {
      this.favorite = 'assets/FavoriteFalst/FavoriteFalseSm.png';
    }
  }

  toggleFavorite() {
    if (this.canToggleFavorite) {
      this.isFavorite = !this.isFavorite;
      this.favoriteToggled.emit(this.isFavorite);
    }
  }
}
