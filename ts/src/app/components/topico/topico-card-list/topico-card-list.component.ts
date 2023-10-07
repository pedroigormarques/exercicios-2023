import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario/comentario';
import { Topico } from 'src/app/interfaces/topico/topico';

@Component({
  selector: 'app-topico-card-list',
  templateUrl: './topico-card-list.component.html',
  styleUrls: ['./topico-card-list.component.scss'],
})
export class TopicoCardListComponent implements OnInit {
  @Input() topico!: Topico;
  @Input() aguardandoFeedback: boolean = false;
  exibirTopicoCompleto = false;

  comentarios?: Comentario[];

  constructor() {}

  ngOnInit(): void {}

  alternarExibicaoTopico() {
    if (typeof this.comentarios === 'undefined') this.carregarComentarios();
    this.exibirTopicoCompleto = !this.exibirTopicoCompleto;
  }

  adicionarCurtida() {
    this.topico.qtdCurtidas++;
  }

  carregarComentarios() {
    this.comentarios = [
      {
        id: 1,
        autor: 'Pedro Igor Marques',
        topico: this.topico.id,
        conteudo:
          'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
      },
      {
        id: 2,
        autor: 'Pedro',
        topico: this.topico.id,
        conteudo:
          'Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.\n\nObrigada pela resposta, muito interessante o seu trabalho! ',
      },
      {
        id: 3,
        autor: 'Pedro Igor',
        topico: this.topico.id,
        conteudo:
          'Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.\n\nSituado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
      },
    ];
  }

  gerarMarcacaoComentario(comentario: Comentario): string | undefined {
    if (this.topico.autor === comentario.autor) return 'Autor';
    if (comentario.autor === 'Pedro Igor') return 'Coautor';
    return undefined;
  }
}
