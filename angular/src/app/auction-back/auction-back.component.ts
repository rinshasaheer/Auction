import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-auction-back',
  templateUrl: './auction-back.component.html',
  styleUrls: ['./auction-back.component.css']
})
export class AuctionBackComponent implements OnInit {
  viewComp : string;
  title : any;
  startFrom :any = '';
  startUpto  :any = '';
  endFrom :any = '';
  endUpto :any = '';
  public daterange: any = {};
  public options: any = {
      locale: { format: 'DD-MM-YYYY' },
      alwaysShowCalendars: false,
  };
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
    this.viewComp = 'Running';
    this.title = 'Running Auction';
  }

  updateView(page){
    this.viewComp = page;
    this.title = page + ' Auction';

  }



}
