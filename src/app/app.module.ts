/*
============================================
; Title: NodeBucket
; Author: Professor Krasso
; Date: 12-14-20
; Modified By: Rhonda Rivas
; Description: Node Bucket employee management app
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './pages/signin/signin.component';
import {CookieService} from 'ngx-cookie-service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TaskCreateDialogComponent } from './shared/task-create-dialog/task-create-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './pages/about/about.component';
import { MatDividerModule } from '@angular/material/divider';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
declarations: [
  AppComponent,
  BaseLayoutComponent,
  AuthLayoutComponent,
  HomeComponent,
  SigninComponent,
  TaskCreateDialogComponent,
  AboutComponent,
  NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'}),
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TaskCreateDialogComponent]
  })
export class AppModule { }  