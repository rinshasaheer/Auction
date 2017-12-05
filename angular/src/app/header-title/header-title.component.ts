import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css'],
  inputs : ['title']
})
export class HeaderTitleComponent implements OnInit {

  private title:String;

  constructor() { }

  ngOnInit() {
  }

}
