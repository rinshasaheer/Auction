import { Component,ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
 
})
export class AllUsersComponent implements OnInit {
 
  displayedColumns = [ 'name', 'phone','email','status','action'];
  dataSource: MatTableDataSource<any>;
  existStatus =false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private userService: UserService,
    
     private router: Router) {
    // Create 100 users

  }
  refresh(){
    const users = [];
    this.userService.getAllUser().subscribe(data=>{
      console.log(data);
        // data.forEach((item, index) => {
        //   users.push({
        //   //slno:index+1,
        //   name: item.name,
        //   phone: item.phone.toString(),
        //   email: item.email,
        //   action:item._id
        // });
        // });
        // console.log(data);
        if(data != '')
        {
          this.existStatus = true;
        }
        console.log(this.existStatus);
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

  deleteUser(id){  
    console.log(id);
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
       // this.refresh();
      //  this.router.navigate(['/deleted-users']);
      }else{
       
       // this.router.navigate(['/deleted-users']);
      }
    });

  }

  blockUser(id){  
    console.log("hi");
    this.userService.blockUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
       // this.refresh();
        //this.router.navigate(['/disabled-users']);
      }else{
       
       // this.router.navigate(['/all-users']);
      }
    });

  }
  unblockUser(id){
    this.userService.unblockUser(id).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.refresh();
       // this.refresh();
      //  this.router.navigate(['/all-users']);
      }else{
       
       // this.router.navigate(['/disabled-users']);
      }
    });

  }

}


// export interface UserData {
//  // slno:number;
//   name: string;
//   phone: string;
//   email: string;
//   action:number;
 
// }