import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClosedAuctionComponent } from './closed-auction/closed-auction.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  {path:'', redirectTo:'/closed-auction', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'closed-auction', component:ClosedAuctionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ClosedAuctionComponent
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
