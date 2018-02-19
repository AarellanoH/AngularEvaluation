import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import {ContactService} from './services/contact.service';
import {ContactRemoteService} from './services/contact-remote.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    ContactRemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
