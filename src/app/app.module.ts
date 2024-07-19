import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealDetailsComponent } from './deal-details/deal-details.component';
import { DealStatusService } from './deal-status.service';


@NgModule({
  declarations: [
    AppComponent,
    DealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DealStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
