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
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FinishedauctionComponent } from './finishedauction/finishedauction.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { UpcomingauctionsComponent } from './upcomingauctions/upcomingauctions.component';

import { ProductService } from './services/product.service';

import {AuthGuard} from './guards/auth.guard' ;
import { UserService } from './services/user.service';

import { EqualValidator } from './equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ClosedAuctionBackComponent } from './closed-auction-back/closed-auction-back.component';
import { UpcomingAuctionBackComponent } from './upcoming-auction-back/upcoming-auction-back.component';
import { RunningAuctionBackComponent } from './running-auction-back/running-auction-back.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

import {ProductServiceService} from './product-service.service';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { CapitalizePipe } from './capitalize.pipe';
import { RunningauctionComponent } from './runningauction/runningauction.component';
import { CardRunningComponent } from './card-running/card-running.component'

const appRoutes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'login', component:LoginComponent},  
  {path:'closed-auction', component:ClosedAuctionBackComponent},
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent},
  {path:'socialmedia/:id', component:SocialmediaComponent},

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
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent},
  {path:'running-auction', component:RunningAuctionBackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    UpcomingAuctionBackComponent,
    RunningAuctionBackComponent,
    SocialmediaComponent,

    ReadMoreComponent,
    CountDownTimerComponent,
    RunningauctionComponent,
    CardRunningComponent,
  ],
  
  providers: [ProductServiceService,
    UserService,
    AuthGuard,
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
    RouterModule.forRoot(appRoutes)
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
