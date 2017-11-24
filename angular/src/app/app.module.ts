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


const appRoutes: Routes = [
  {path:'', redirectTo:'/registration', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EqualValidator,

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
