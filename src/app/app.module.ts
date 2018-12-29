//import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthService,
    UserService,
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
