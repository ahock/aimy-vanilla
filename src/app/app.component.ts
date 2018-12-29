import { Component } from '@angular/core';
import * as $ from 'jquery';


import { User } from './user/user';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aimy-vanilla';
  info:boolean = false;

  constructor(public authSerivce: AuthService, public userService: UserService) {
    console.log("Constructor: AppComponent");
    authSerivce.handleAuthentication();
  }

  public infoSet(){
    this.info = this.info?false:true;
  }h
  
}
