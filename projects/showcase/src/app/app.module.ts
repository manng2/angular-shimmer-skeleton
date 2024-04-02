import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShimmerLineComponent } from 'projects/angular-shimmer-skeleton/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShimmerLineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
