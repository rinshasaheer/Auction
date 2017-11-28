import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DisabledUsersComponent } from './disabled-users/disabled-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';

const appRoutes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'AllUsers', component: AllUsersComponent},
  {path:'DeletedUser', component: DeletedUsersComponent},
  {path:'DisabledUsers', component: DisabledUsersComponent}
  

 
  
  ]

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    DashboardComponent,
    AllUsersComponent,
    DisabledUsersComponent,
    DeletedUsersComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
