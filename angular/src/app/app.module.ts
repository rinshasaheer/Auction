import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClosedAuctionComponent } from './closed-auction/closed-auction.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './services/product.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

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
    ClosedAuctionComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
