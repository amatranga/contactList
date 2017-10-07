import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { ContactListViewComponent } from './contact-list-view/contact-list-view.component';
import { ContactItemComponent } from './contact-list-view/contact-item/contact-item.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailViewComponent,
    ContactListViewComponent,
    ContactItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
