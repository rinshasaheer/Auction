import { Component,ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'disabled-users',
  templateUrl: './disabled-users.component.html',
  styleUrls: ['./disabled-users.component.css']
})
export class DisabledUsersComponent implements OnInit {
  displayedColumns = [ 'name', 'phone','email','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private userService: UserService,
    
     private router: Router) {
    // Create 100 users

  }
  refresh(){
    const users = [];
    this.userService.getDisabledUsers().subscribe(data=>{
        // data.forEach((item, index) => {
        //   users.push({
        //   //slno:index+1,
        //   name: item.name,
        //   phone: item.phone.toString(),
        //   email: item.email,
        //   action:item._id
        // });
        // });
        this.dataSource = new MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  });
  }
ngOnInit() {
  this.userService.getLoggedUSerDetails().subscribe(info =>{
    if(info.role !="admin"){
      this.router.navigate(['/login']);
    }
  });
  this.refresh();
   

}


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  unblockUser(id){
    this.userService.unblockUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
      //  this.router.navigate(['/all-users']);
      }else{
       
       // this.router.navigate(['/disabled-users']);
      }
    });

  }
}
