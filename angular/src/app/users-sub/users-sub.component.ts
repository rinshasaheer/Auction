import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-sub',
  templateUrl: './users-sub.component.html',
  styleUrls: ['./users-sub.component.css']
})
export class UsersSubComponent implements OnInit {
  viewComp : string;
  title : any;
  constructor() { }

  ngOnInit() {
    console.log("hhh");
    this.viewComp = 'All';
    this.title = 'Allusers List';
  }
  updateView(page){
    this.viewComp = page;
    this.title = page + ' Users List';

  }

}
