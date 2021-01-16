import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  sidebarOpened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler(){
    this.sidebarOpened = !this.sidebarOpened;
    console.log("click received")
  }
}
