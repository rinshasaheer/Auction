

  import { Component,ViewChild,OnInit} from '@angular/core';
  import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
  import {UserService} from '../services/user.service';
  import {Router} from '@angular/router';
  
  
  @Component({
    selector: 'deleted-users',
    templateUrl: './deleted-users.component.html',
    styleUrls: ['./deleted-users.component.css']
  })
  export class DeletedUsersComponent implements OnInit{
   
     displayedColumns = [ 'name', 'phone','email'];
    dataSource: MatTableDataSource<any>;
    existStatus =false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor( private userService: UserService,
      
       private router: Router) {
      // Create 100 users
  
    }
   
  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
      const users: any[] = [];
      this.userService.getDeletedUsers().subscribe(data=>{
          // data.forEach((item, index) => {
          //   users.push({
          //   name: item.name,
          //   phone: item.phone.toString(),
          //   email:item.email
          // });
          // });
          if(data != '')
          {
            this.existStatus = true;
          }
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
    });
  
   
     
  }
  
  
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
  }
  
  
  // export interface UserData {
  //   name: string;
  //   phone: string;
  //   email:string;
  // }