import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'disabled-users',
  templateUrl: './disabled-users.component.html',
  styleUrls: ['./disabled-users.component.css']
})
export class DisabledUsersComponent implements OnInit {
  users:Object;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
    this.userService.getDisabledUsers().subscribe(data=>{
      this.users = data;
     console.log(data);
      });
  }
  unblockUser(id){
    this.userService.unblockUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
       
        this.router.navigate(['/all-users']);
      }else{
       
        this.router.navigate(['/disabled-users']);
      }
    });

  }
}
