import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClosedAuctionComponent } from './closed-auction/closed-auction.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './services/product.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

import { EqualValidator } from './equal-validator.directive';

const appRoutes: Routes = [
  {path:'', redirectTo:'/registration', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'closed-auction', component:ClosedAuctionComponent},
  {path:'home', component:HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClosedAuctionComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
