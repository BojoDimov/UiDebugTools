import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiDebugToolsLibModule } from '../../projects/ui-debug-tools-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiDebugToolsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
