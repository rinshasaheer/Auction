import 'core-js/es7/reflect';
import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './services/user.service';
import { HttpModule } from '@angular/http';
// import { DataTablesModule } from 'angular-datatables';
import 'hammerjs';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';


import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { DisabledUsersComponent } from './disabled-users/disabled-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FinishedauctionComponent } from './finishedauction/finishedauction.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { UpcomingauctionsComponent } from './upcomingauctions/upcomingauctions.component';
import { FileUploader } from 'ng2-file-upload';
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
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import * as $ from 'jquery';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterPipe } from './filter.pipe';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPipe } from './product.pipe';
import { NgDatepickerComponent } from './ng-datepicker/ng-datepicker.component';
import { AdminviewedComponent } from './adminviewed/adminviewed.component';
//import { NgDatepickerModule } from 'ng2-datepicker';
import { UploadComponent } from './upload/upload.component';
import { ImageUploadModule } from "angular2-image-upload";//file upload
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { UsersSubComponent } from './users-sub/users-sub.component';
import { ActiveUsersComponent } from './active-users/active-users.component';


import { CommonModule } from '@angular/common';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { DateSearchPipe } from './date-search.pipe';
import { AuctionBackComponent } from './auction-back/auction-back.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { Config } from './../../config/config';
import { MaterialComponent } from './material/material.component';
import { MyauctiontableComponent } from './myauctiontable/myauctiontable.component';
import { SearchPipe } from './search.pipe';
//import { ProductDeleteComponent } from './product-delete/product-delete.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';


const appRoutes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'product-detail/:id', component:ProductDetailComponent},
  //  {path:'product', component:ProductComponent},
  {path:'product-list', component:ProductListComponent},

  {path:'login', component:LoginComponent},  
  {path:'socialmedia/:id', component:SocialmediaComponent},
  {path:'adminviewed/:id', component:AdminviewedComponent},
  {path:'dashboard', component: DashboardComponent},
  //{path:'all-users', component: AllUsersComponent},
  // {path:'disabled-users', component: DisabledUsersComponent},
  // {path:'deleted-users', component: DeletedUsersComponent},
  {path:'upcomingauction', component: UpcomingauctionsComponent},
  {path:'finishedauction', component: FinishedauctionComponent},
  {path:'runningauction', component: RunningauctionComponent},
  {path:'home', component:HomeComponent},
  {path:'myauctions', component:MyauctionsComponent},
  {path:'email-verification/:id', component:EmailVerificationComponent},
  {path:'auctions', component:AuctionBackComponent},
  {path:'winnerconfirm/:id', component:WinnerconfirmComponent},
  
  {path:'upload', component:UploadComponent},
  {path:'material', component:MaterialComponent},
  {path:'users-sub', component:UsersSubComponent},
  { path: '**', component: LoginComponent },
]
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class DemoMaterialModule {}

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
    FileSelectDirective,
    ReadMoreComponent,
    CountDownTimerComponent,
    RunningauctionComponent,
    CardRunningComponent,
    WinnerconfirmComponent,
    ProductPipe,
    AdminviewedComponent,
    UploadComponent,
    FileSelectDirective,
    UsersSubComponent,
    ActiveUsersComponent,
    NgDatepickerComponent,
    DateSearchPipe,
    AuctionBackComponent,
    MyauctiontableComponent,
    SearchPipe,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    HttpModule,
    NKDatetimeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    DemoMaterialModule,
    
   // NgDatepickerModule
    NgSlimScrollModule,
  //  NgDatepickerModule
    ImageUploadModule,
    Daterangepicker,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DemoMaterialModule
    // FlashMessagesModule.forRoot(),
    
    // NKDatetimeModule,
    //  DataTablesModule
    // Ng2DatetimePickerModule
    //ImageUploadModule.forRoot(), //file upload
    // Daterangepicker,
    // BrowserAnimationsModule,
    // DemoMaterialModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
  ],
  
  providers: [ProductServiceService,
    UserService,
    AuthGuard,
    ProductService,
    Config
  ],
 
  bootstrap: [AppComponent],
  
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);