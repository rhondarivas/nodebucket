/*
============================================
; Title: NodeBucket
; Author: Professor Krasso
; Date: 12-14-20
; Modified By: Rhonda Rivas
; Description: Node Bucket employee management app
;===========================================
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
