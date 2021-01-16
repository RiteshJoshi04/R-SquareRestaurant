import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  sidebarOpened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler(){
    this.sidebarOpened = !this.sidebarOpened;
    console.log("click received")
  }
}
