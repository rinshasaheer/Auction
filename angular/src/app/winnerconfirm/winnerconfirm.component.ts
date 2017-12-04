import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../services/user.service';

@Component({
  selector: 'winnerconfirm',
  templateUrl: './winnerconfirm.component.html',
  styleUrls: ['./winnerconfirm.component.css']
})
export class WinnerconfirmComponent implements OnInit {
  private sub: any;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params.id);
   });
  }

}
