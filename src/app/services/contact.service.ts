import { Injectable } from '@angular/core';
import {Contact} from '../models/Contact';

@Injectable()
export class ContactService {

  contacts: Contact[];
  index: number;

  constructor() {
    this.contacts = [
      {_id: '1', name: 'Alejandro', phone: '614123'},
      {_id: '2', name: 'Andres', phone: '614456'},
      {_id: '3', name: 'Antonio', phone: '614789'},
    ];

    this.index = 3;
  }

  getContacts(): Contact[]{
    return this.contacts;
  }

  saveContact(contact: Contact) {
    contact._id = '' + ++this.index;
    this.contacts.push(contact);
  }

  deleteContact(contact: Contact) {
    const index = this.contacts.indexOf(contact, 0);
    this.contacts.splice(index, 1);
  }

  findContact(_id: string): Contact {
    const contact: Contact = this.contacts.find(contact => contact._id === _id);
    return contact;
  }

  updateContact (contact: Contact) {
    //                                                    //No need to do anything as there is a reference to the
    //                                                    //    object.
    alert('Contact updated');
  }

}
