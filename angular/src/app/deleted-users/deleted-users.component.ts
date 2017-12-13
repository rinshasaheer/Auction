

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
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor( private userService: UserService,
      
       private router: Router) {
      // Create 100 users
  
    }
   
  ngOnInit() {
    
      const users: UserData[] = [];
      this.userService.getDeletedUsers().subscribe(data=>{
          data.forEach((item, index) => {
            users.push({
            name: item.name,
            phone: item.phone.toString(),
            email:item.email
          });
          });
          this.dataSource = new MatTableDataSource(users);
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
  
  
  export interface UserData {
    name: string;
    phone: string;
    email:string;
  }
