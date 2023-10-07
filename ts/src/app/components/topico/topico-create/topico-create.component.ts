import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Topico } from 'src/app/interfaces/topico/topico';

@Component({
  selector: 'app-topico-create',
  templateUrl: './topico-create.component.html',
  styleUrls: ['./topico-create.component.scss'],
})
export class TopicoCreateComponent implements OnInit {
  @Output() topicoEmmiter: EventEmitter<Topico> = new EventEmitter();

  topicoForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.topicoForm = new FormGroup({
      autor: new FormControl('Pedro Igor Marques', [Validators.required]),
      assunto: new FormControl('', [
        // Validators.required,
        Validators.maxLength(80),
      ]),
      conteudo: new FormControl('', [
        // Validators.required,
        Validators.maxLength(350),
      ]),
    });
  }

  criarTopico(): void {
    const topicoCriado: Topico = {
      ...this.topicoForm.value,
      id: 1,
      qtdCurtidas: 0,
      qtdRespostas: 0,
    };

    this.topicoEmmiter.emit(topicoCriado);
  }
}
