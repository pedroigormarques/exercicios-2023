import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopicoCardListComponent } from './components/topico/topico-card-list/topico-card-list.component';
import { ComentarioCardListComponent } from './components/comentario/comentario-card-list/comentario-card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopicoCreateComponent } from './components/topico/topico-create/topico-create.component';
import { VideoComponent } from './components/auxiliares/video/video.component';
import { RodapeComponent } from './components/gerais/rodape/rodape.component';
import { CabecalhoComponent } from './components/gerais/cabecalho/cabecalho.component';
import { MenuLateralComponent } from './components/gerais/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicoCardListComponent,
    ComentarioCardListComponent,
    TopicoCreateComponent,
    VideoComponent,
    RodapeComponent,
    CabecalhoComponent,
    MenuLateralComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
