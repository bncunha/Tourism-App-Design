import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BgDestinationComponent } from './components/bg-destination/bg-destination.component';
import { CornerButtonComponent } from './components/corner-button/corner-button.component';
import { InfoDestinationComponent } from './components/info-destination/info-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    BgDestinationComponent,
    CornerButtonComponent,
    InfoDestinationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
