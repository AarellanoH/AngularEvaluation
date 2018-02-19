import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../models/Contact';

@Injectable()
export class ContactRemoteService {

  private baseUrl: String = 'https://baas.kinvey.com/appdata/kid_rk4MSqDDf';

  constructor(
    private http: HttpClient
  ) { }

  getContacts(
    success: (movies: Contact[]) => void,
    error: (message: String) => void
  ) {
    const url = this.baseUrl + '/contacts';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX3JrNE1TcUREZjoxNjk1YmU2NTk2ZTA0MGE4ODI5ZjQwMWQ2MjgyZDBmNw==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.get(
      url,
      {
        headers: headers
      }
    ).subscribe(
      data => {
        const contacts: Contact[] = [];

        for (const contactJson of data as Array<any>) {
          contacts.push(contactJson);
        }

        success(contacts);
      },
      err => {
        error('An error occurred while consulting the list of movies');
      }
    );
  }

  saveContact(
    contact: Contact,
    success: () => void,
    error: (message: String) => void
  ) {
    const url = this.baseUrl + '/contacts';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX3JrNE1TcUREZjoxNjk1YmU2NTk2ZTA0MGE4ODI5ZjQwMWQ2MjgyZDBmNw==',
      'X-Kinvey-API-Version': '3'
    };

    const body = {
      'name': contact.name,
      'phone': contact.phone
    };

    this.http.post(
      url,
      body,
      {
        headers: headers
      }
    ).subscribe(
      data => {
        success();
      },
      err => {
        error('An error occurred while creating the contact');
      }
    );
  }

  findContact(
    _id: string,
    success: (contact: Contact) => void,
    error: (message: string) => void
  ) {
    const url = this.baseUrl + '/contacts/' + _id;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX3JrNE1TcUREZjoxNjk1YmU2NTk2ZTA0MGE4ODI5ZjQwMWQ2MjgyZDBmNw==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.get(
      url,
      {
        headers: headers
      }
    ).subscribe(
      data => {
        const contactJson = data as any;
        const contact: Contact = contactJson;

        success(contact);
      },
      err => {
        error('An error occurred while finding the contact with _id ' + _id);
      }
    );
  }

  updateContact(
    contact: Contact,
    success: () => void,
    error: (message: String) => void
  ) {
    const url = this.baseUrl + '/contacts/' + contact._id;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX3JrNE1TcUREZjoxNjk1YmU2NTk2ZTA0MGE4ODI5ZjQwMWQ2MjgyZDBmNw==',
      'X-Kinvey-API-Version': '3'
    };

    const body = {
      'name': contact.name,
      'phone': contact.phone
    };

    this.http.put(
      url,
      body,
      {
        headers: headers
      }
    ).subscribe(
      data => {
        success();
      },
      err => {
        error('An error occurred while updating the contact');
      }
    );
  }

  deleteContact(
    contact: Contact,
    success: () => void,
    error: (message: string) => void
  ) {
    const url = this.baseUrl + '/contacts/' + contact._id;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX3JrNE1TcUREZjoxNjk1YmU2NTk2ZTA0MGE4ODI5ZjQwMWQ2MjgyZDBmNw==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.delete(
      url,
      {
        headers: headers
      }
    ).subscribe(
      () => {
        success();
      },
      err => {
        error('An error occurred while deleting the contact');
      }
    );
  }
}
