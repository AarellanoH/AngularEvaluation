import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/Contact';
import {ContactRemoteService} from '../../services/contact-remote.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(
    private contactService: ContactRemoteService
  ) { }

  ngOnInit() {
    this.fetchContacts();
  }


  fetchContacts() {
    this.contactService.getContacts(
      contacts => {
        this.contacts = contacts;
      },
      errorMessage => {
        alert(errorMessage);
      }
    );
  }

}
