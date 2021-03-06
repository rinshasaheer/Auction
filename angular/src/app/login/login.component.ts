import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UserService]
})
export class LoginComponent implements OnInit {
  btnDisbled:boolean = false;
  newLogin = {
    email : '',
    password : '',
  }
  status: boolean = false;
  msg : '';
  constructor(private userService:UserService, private routes: Router) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      console.log(info.role);
      if(info.role == "user"){
        this.routes.navigate(['/home']);
      }
      if(info.role == "admin"){
        this.routes.navigate(['/dashboard']);
      }
    })
  }

  login(){
    this.btnDisbled = true;
    this.userService.authenticateUser(this.newLogin).subscribe(data => {
      // console.log('after auth');
      console.log(data);
      if(data.success==false){
        this.btnDisbled = false;
        this.status= true;
      }
      if(data.success){
        this.userService.storeUserData(data.token, data.user);
        // if(data.user.role=="user"){
          
        //   this.routes.navigate(['/home']);
        // }
        // if(data.user.role=="admin"){
        //   this.routes.navigate(['/dashboard']);
        // }
        this.userService.getLoggedUSerDetails().subscribe(info =>{
          console.log(info.role);
          if(info.role == "user"){
            this.routes.navigate(['/home']);
          }
          if(info.role == "admin"){
            this.routes.navigate(['/dashboard']);
          }
        })
      } else {
        // console.log(data.msg);
        this.btnDisbled = false;
        this.msg = data.msg;
        // this.routes.navigate(['/registration']);
      }
    });
  }

}
