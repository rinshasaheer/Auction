import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.userService.getLoggedUSerDetails().subscribe(info =>{
    //   if(info.role !="admin"){
        this.router.navigate(['/auctions']);
    //   }
    // });
  }

}
