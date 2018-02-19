import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactEditComponent} from './components/contact-edit/contact-edit.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'contacts', component: ContactListComponent},
  { path: 'newContact', component: ContactFormComponent},
  { path: 'editContact/:_id', component: ContactEditComponent},
  { path: 'contactDetail/:_id', component: ContactDetailComponent},

  // { path: 'about', component: About }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
