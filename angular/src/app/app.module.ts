import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './services/user.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { DisabledUsersComponent } from './disabled-users/disabled-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';


const appRoutes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'all-users', component: AllUsersComponent},
  {path:'disabled-users', component: DisabledUsersComponent},
  {path:'deleted-users', component: DeletedUsersComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent,
    FooterComponent,
    SideBarComponent,
    AllUsersComponent,
    HeaderTitleComponent,
    DisabledUsersComponent,
    DeletedUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
