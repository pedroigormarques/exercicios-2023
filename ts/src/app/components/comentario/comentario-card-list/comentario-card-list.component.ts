import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario/comentario';

@Component({
  selector: 'app-comentario-card-list',
  templateUrl: './comentario-card-list.component.html',
  styleUrls: ['./comentario-card-list.component.scss'],
})
export class ComentarioCardListComponent implements OnInit {
  @Input() comentario!: Comentario;
  @Input() marcacaoEspecial?: string;

  constructor() {}

  ngOnInit(): void {}
}
