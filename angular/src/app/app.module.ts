import 'core-js/es7/reflect';
import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './services/user.service';
import { HttpModule } from '@angular/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { DisabledUsersComponent } from './disabled-users/disabled-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';



import { ProductComponent } from './product/product.component';

// import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';







import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FinishedauctionComponent } from './finishedauction/finishedauction.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { UpcomingauctionsComponent } from './upcomingauctions/upcomingauctions.component';
// import { ImageUploadModule } from "angular2-image-upload";


import { ProductService } from './services/product.service';

import {AuthGuard} from './guards/auth.guard' ;


import { EqualValidator } from './equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ClosedAuctionBackComponent } from './closed-auction-back/closed-auction-back.component';
import { UpcomingAuctionBackComponent } from './upcoming-auction-back/upcoming-auction-back.component';
import { RunningAuctionBackComponent } from './running-auction-back/running-auction-back.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

import {ProductServiceService} from './services/product-service.service';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { CapitalizePipe } from './capitalize.pipe';
import { RunningauctionComponent } from './runningauction/runningauction.component';
import { CardRunningComponent } from './card-running/card-running.component';
import { WinnerconfirmComponent } from './winnerconfirm/winnerconfirm.component'

import { RegistrationComponent } from './registration/registration.component';
import { ImageUploadModule } from "angular2-image-upload";
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
//  import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterPipe } from './filter.pipe';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPipe } from './product.pipe';
// import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

const appRoutes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
   {path:'product', component:ProductComponent},
  {path:'manage-product', component:ManageProductComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'login', component:LoginComponent},  
  {path:'socialmedia/:id', component:SocialmediaComponent},

  {path:'dashboard', component: DashboardComponent},
  {path:'all-users', component: AllUsersComponent},
  {path:'disabled-users', component: DisabledUsersComponent},
  {path:'deleted-users', component: DeletedUsersComponent},

  {path:'upcomingauction', component: UpcomingauctionsComponent},
  {path:'finishedauction', component: FinishedauctionComponent},
  {path:'runningauction', component: RunningauctionComponent},

  
  {path:'', redirectTo:'/registration', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  
  {path:'home', component:HomeComponent},
  {path:'myauctions', component:MyauctionsComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'closed-auction', component:ClosedAuctionBackComponent},
  {path:'upcoming-auction', component:UpcomingAuctionBackComponent},
  {path:'running-auction', component:RunningAuctionBackComponent},
  {path:'winnerconfirm/:id', component:WinnerconfirmComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegistrationComponent,
    ProductListComponent,
    FilterPipe,
    ManageProductComponent,
    ProductDetailComponent,
    LoginComponent,
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
    HeaderTitleComponent,
    FooterComponent,
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
    WinnerconfirmComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    // DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    HttpModule,
    // ImageUploadModule,
    RouterModule.forRoot(appRoutes),
    // DataTablesModule,
    ImageUploadModule,
    // NKDatetimeModule,
    NKDatetimeModule,
    //  DataTablesModule
    // Ng2DatetimePickerModule
    BrowserModule,
    // DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    // DataTablesModule,
    // ImageUploadModule,
    // NKDatetimeModule,
    NKDatetimeModule,
    //  DataTablesModule
    // Ng2DatetimePickerModule
    
  ],
  
  providers: [ProductServiceService,
    UserService,
    AuthGuard,
    ProductService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
