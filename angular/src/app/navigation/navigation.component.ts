import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // inputs: ['page']
})
export class NavigationComponent implements OnInit {

  brand_logo: String = "brand.png";
  clicked: any = "";
  constructor(private router: Router) { }
  page: any;
  ngOnInit() {
    // console.log(this.page);
    
  }

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
}
