import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit() {
    this.viewComp = 'Running';
    this.title = 'Running Auction';
  }

  updateView(page){
    this.viewComp = page;
    this.title = page + ' Auction';

  }



}
