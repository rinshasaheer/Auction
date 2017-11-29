import 'core-js/es7/reflect';
import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
// import { DataTablesModule } from 'angular-datatables';
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
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FinishedauctionComponent } from './finishedauction/finishedauction.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { UpcomingauctionsComponent } from './upcomingauctions/upcomingauctions.component';

import { ProductService } from './services/product.service';

// import { LoginComponent } from './login/login.component';

import { EqualValidator } from './equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ClosedAuctionBackComponent } from './closed-auction-back/closed-auction-back.component';
import { UpcomingAuctionBackComponent } from './upcoming-auction-back/upcoming-auction-back.component';
import { RunningAuctionBackComponent } from './running-auction-back/running-auction-back.component';

import {ProductServiceService} from './product-service.service';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { CapitalizePipe } from './capitalize.pipe'
const appRoutes: Routes = [
  {path:'Dashboard', component: DashboardComponent},
  {path:'AllUsers', component: AllUsersComponent},
  {path:'DeletedUser', component: DeletedUsersComponent},
  {path:'DisabledUsers', component: DisabledUsersComponent},
  {path:'', redirectTo:'/registration', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'home', component:HomeComponent},
  {path:'myauctions', component:MyauctionsComponent},

 {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'closed-auction', component:ClosedAuctionBackComponent},
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent}

 
  
  ]



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent,
    FinishedauctionComponent,
    UpcomingauctionsComponent,
    MyauctionsComponent,
    EqualValidator,
    CapitalizePipe,
    DashboardComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    DashboardComponent,
    AllUsersComponent,
    DisabledUsersComponent,
    DeletedUsersComponent,
    EmailVerificationComponent,
    ClosedAuctionBackComponent,
    UpcomingAuctionBackComponent
  ],
  
  providers: [ProductServiceService,
    
    ProductService
  ],
  imports: [
    BrowserModule,
    // DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2PageScrollModule,
    HttpModule,

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
