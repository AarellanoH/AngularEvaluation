import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/Contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {ContactRemoteService} from '../../services/contact-remote.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactService: ContactRemoteService
  ) { }

  ngOnInit() {
    const _id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.contactService.findContact(
      _id,
      (contact: Contact) => {
        this.contact = contact;
      },
      (errorMessage) => {
        alert(errorMessage);
      }
      );
  }

  saveChanges() {
    this.contactService.updateContact(
      this.contact,
      () => {
        alert('Contact updated successfully');
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );
    this.router.navigate(['/contacts']);
  }

}
