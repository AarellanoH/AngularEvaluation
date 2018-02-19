import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  todayDate = new Date();
  todayDay = this.todayDate.getDate();
  //                                                        //Months begin in 0.
  todayMonth = this.todayDate.getMonth() + 1;
  todayYear = this.todayDate.getFullYear();
  todayHour = this.todayDate.getHours();
  todayMinutes = this.todayDate.getMinutes();
  todayAmPm: string;


  constructor() { }

  ngOnInit() {
    //                                                      //AM or PM
    if (this.todayHour < 12) {
      this.todayAmPm = 'a.m.';
    }
    else {
      this.todayAmPm = 'p.m.';
    }
    this.todayHour = this.todayHour % 12;
  }

}
