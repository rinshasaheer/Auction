import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'users-sub',
  templateUrl: './users-sub.component.html',
  styleUrls: ['./users-sub.component.css']
})
export class UsersSubComponent implements OnInit {
  viewComp : string;
  title : any;
  constructor(private userService: UserService,
    
     private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });   
    this.viewComp = 'All';
    this.title = 'Allusers List';
  }
  updateView(page){
    this.viewComp = page;
    this.title = page + ' Users List';

  }

}
