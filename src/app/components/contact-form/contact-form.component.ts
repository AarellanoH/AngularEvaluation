import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../models/Contact';
import {ContactRemoteService} from '../../services/contact-remote.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(
    private contactService: ContactRemoteService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  //                                                        //Invoked when save button is pressed.
  saveContact() {
    //                                                      //Service saves the contact.
    this.contactService.saveContact(
      this.contact,
      () => {
        alert('Contact created successfully');
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );

    this.router.navigate(['/contacts']);
  }
}
