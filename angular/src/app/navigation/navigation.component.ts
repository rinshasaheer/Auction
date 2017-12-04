import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // inputs: ['page']
})
export class NavigationComponent implements OnInit {

  brand_logo: String = "brand.png";
<<<<<<< HEAD
  clicked: any = "";
  constructor(private router: Router) { }
  page: any;
=======
  constructor(private userService : UserService, private router: Router) { }

>>>>>>> 80e4e6629249816d599d321923b29db7339bc871
  ngOnInit() {
    // console.log(this.page);
    
  }

<<<<<<< HEAD
  // changeClass(event){
  //   var target = event.currentTarget;
    
  //     var pElement = target.parentElement.parentElement;
  //     var pclassEle = pElement.querySelectorAll('.active').remove('active');
  // }
//   clickedlink(name){
//     this.clicked = name;
//   }
//   refresh(): void {
//     window.location.reload();
// }
=======
  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    return false;
  }

>>>>>>> 80e4e6629249816d599d321923b29db7339bc871
}
