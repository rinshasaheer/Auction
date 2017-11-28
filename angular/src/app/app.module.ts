import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DisabledUsersComponent } from './disabled-users/disabled-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './services/product.service';

// import { LoginComponent } from './login/login.component';

import { EqualValidator } from './equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ClosedAuctionBackComponent } from './closed-auction-back/closed-auction-back.component';
import { UpcomingAuctionBackComponent } from './upcoming-auction-back/upcoming-auction-back.component';
import { RunningAuctionBackComponent } from './running-auction-back/running-auction-back.component';

const appRoutes: Routes = [
  {path:'Dashboard', component: DashboardComponent},
  {path:'AllUsers', component: AllUsersComponent},
  {path:'DeletedUser', component: DeletedUsersComponent},
  {path:'DisabledUsers', component: DisabledUsersComponent},
  {path:'', redirectTo:'/registration', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'closed-auction', component:ClosedAuctionBackComponent},
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent}

 
  
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
   
    RegistrationComponent,
    EqualValidator,
    LoginComponent,
    EmailVerificationComponent,
    ClosedAuctionBackComponent,
    UpcomingAuctionBackComponent,
    RunningAuctionBackComponent,
    FormsModule,
    ReactiveFormsModule,

    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
 
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
