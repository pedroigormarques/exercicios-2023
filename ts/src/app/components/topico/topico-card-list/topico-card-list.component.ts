import { Component, OnInit, Input } from '@angular/core';
import { Topico } from 'src/app/interfaces/topico/topico';

@Component({
  selector: 'app-topico-card-list',
  templateUrl: './topico-card-list.component.html',
  styleUrls: ['./topico-card-list.component.scss'],
})
export class TopicoCardListComponent implements OnInit {
  @Input() topico!: Topico;
  exibirTopicoCompleto = false;

  constructor() {}

  ngOnInit(): void {}

  alternarExibicaoTopico() {
    this.exibirTopicoCompleto = !this.exibirTopicoCompleto;
  }

  adicionarCurtida() {
    this.topico.qtdCurtidas++;
  }
}
