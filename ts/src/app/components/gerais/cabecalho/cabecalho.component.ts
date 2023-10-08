import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  @Output() idiomaEmmiter = new EventEmitter<string>();
  idiomaSelecionada = 'pt-br';

  constructor() {}

  ngOnInit(): void {}

  alterarIdioma(novoIdioma: string) {
    this.idiomaSelecionada = novoIdioma;
    this.idiomaEmmiter.emit(novoIdioma);
  }
}
