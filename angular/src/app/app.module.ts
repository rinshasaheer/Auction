import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { HttpModule } from '@angular/http';
import { ProductService } from './services/product.service';

// import { LoginComponent } from './login/login.component';

import { EqualValidator } from './equal-validator.directive';
import { ClosedAuctionBackComponent } from './closed-auction-back/closed-auction-back.component';
import { UpcomingAuctionBackComponent } from './upcoming-auction-back/upcoming-auction-back.component';
import { RunningAuctionBackComponent } from './running-auction-back/running-auction-back.component';


const appRoutes: Routes = [
  {path:'', redirectTo:'/registration', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'closed-auction', component:ClosedAuctionBackComponent},
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EqualValidator,
    ClosedAuctionBackComponent,
    UpcomingAuctionBackComponent,
    RunningAuctionBackComponent,

  ],
  imports: [
    BrowserModule,
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
