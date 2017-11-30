import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  brand_logo: String = "brand.png";
  constructor(private userService : UserService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
