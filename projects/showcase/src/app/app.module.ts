import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  ShimmerCircleComponent,
  ShimmerConversationComponent,
  ShimmerLineComponent,
  ShimmerTableComponent,
} from 'projects/angular-shimmer-skeleton/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShimmerLineComponent,
    ShimmerCircleComponent,
    ShimmerConversationComponent,
    ShimmerTableComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
