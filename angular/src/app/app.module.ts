import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {AuthGuard} from './guards/auth.guard' ;
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';

import { EqualValidator } from './equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ClosedAuctionBackComponent } from './closed-auction-back/closed-auction-back.component';
import { UpcomingAuctionBackComponent } from './upcoming-auction-back/upcoming-auction-back.component';
import { RunningAuctionBackComponent } from './running-auction-back/running-auction-back.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';


const appRoutes: Routes = [
  // {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'login', component:LoginComponent},  
  {path:'closed-auction', component:ClosedAuctionBackComponent},
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent},
  {path:'socialmedia/:id', component:SocialmediaComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EqualValidator,
    LoginComponent,
    EmailVerificationComponent,
    ClosedAuctionBackComponent,
    UpcomingAuctionBackComponent,
    RunningAuctionBackComponent,
    SocialmediaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService, UserService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
