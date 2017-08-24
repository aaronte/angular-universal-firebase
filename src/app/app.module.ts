import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ 
      appId: 'angular-universal-firebase' 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
