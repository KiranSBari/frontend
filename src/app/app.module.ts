import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { HederComponent } from './heder/heder.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
