import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopicoCardListComponent } from './components/topico/topico-card-list/topico-card-list.component';
import { ComentarioCardListComponent } from './components/comentario/comentario-card-list/comentario-card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopicoCreateComponent } from './components/topico/topico-create/topico-create.component';
import { VideoComponent } from './components/auxiliares/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicoCardListComponent,
    ComentarioCardListComponent,
    TopicoCreateComponent,
    VideoComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
