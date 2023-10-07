import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopicoCardListComponent } from './components/topico/topico-card-list/topico-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicoCardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
