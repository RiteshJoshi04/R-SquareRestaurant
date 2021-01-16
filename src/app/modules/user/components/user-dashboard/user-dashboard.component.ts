import { Component, OnInit } from '@angular/core';

const myDataArray = [{
  "name" :"ritesh",
  "age" : 22,
  "location": "Haldwani"
 },
 {
   "name" :"mohit",
   "age" : 22,
   "location": "Dehradun"
 }];


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'age', 'location'];
  tableData = myDataArray;

}
