/*
============================================
; Title: NodeBucket
; Author: Professor Krasso
; Date: 12-04-20
; Modified By: Rhonda Rivas
; Description: Node Bucket employee management app
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

//creates cookies
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();
  isLoggedIn: string;
  constructor(private cookieService: CookieService, private router: Router) {
    this.isLoggedIn = this.cookieService.get('session_user');
  }
  //clears or deletes the cookie so we can log in and out 
  ngOnInit() { }
  signout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}
