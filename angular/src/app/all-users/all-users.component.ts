import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
 
})
export class AllUsersComponent implements OnInit {
  users:Object;
  constructor(
    private userService: UserService,
    
     private router: Router
  ) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.status!=true){
        this.router.navigate(['/login']);
      }
      else if(info.role == "user"){
        this.router.navigate(['/login']);
      }
    });
    this.userService.getAllUser().subscribe(data=>{
      this.users = data;
    //  console.log(data);
      });
  }

  deleteUser(id){  
    this.userService.deleteUser(id).subscribe(data=>{
      // console.log(data);
      if(data.success){
       
        this.router.navigate(['/deleted-users']);
      }else{
       
        this.router.navigate(['/deleted-users']);
      }
    });

  }

  blockUser(id){  
    this.userService.blockUser(id).subscribe(data=>{
      // console.log(data);
      if(data.success){
       
        this.router.navigate(['/disabled-users']);
      }else{
       
        this.router.navigate(['/all-users']);
      }
    });

  }
  unblockUser(id){
    this.userService.unblockUser(id).subscribe(data=>{
      // console.log(data);
      if(data.success){
       
        this.router.navigate(['/all-users']);
      }else{
       
        this.router.navigate(['/disabled-users']);
      }
    });

  }

}

