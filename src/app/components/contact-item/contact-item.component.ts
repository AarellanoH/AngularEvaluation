import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../models/Contact';
import {Router} from '@angular/router';
import {ContactRemoteService} from '../../services/contact-remote.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() onDeleted = new EventEmitter<boolean>();

  constructor(
    private contactService: ContactRemoteService,
    private router: Router
  ) { }

  deleteContact() {
    this.contactService.deleteContact(
      this.contact,
      () => {
        this.onDeleted.emit();
      },
      (errorMessage) => {
        alert(errorMessage);
      }
      );
  }

  editContact() {
    this.router.navigate(['/editContact/' + this.contact._id]);
  }

  ngOnInit() {
  }

}
