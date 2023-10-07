import { Topico } from './interfaces/topico/topico';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title =
    'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP';

  mostrarResumo = false;

  estadoTopico: 'AcessoInicial' | 'CriandoTopico' | 'TopicoCriado' =
    'AcessoInicial';

  topicos: Topico[] = [
    {
      id: 1,
      assunto: 'Assunto da pergunta aparece aqui',
      conteudo:
        'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?',
      autor: 'Pedro Igor Marques',
      qtdCurtidas: 1,
      qtdRespostas: 0,
    },
  ];
  topicosCriados: Topico[] = [];

  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  exibirNovoTopicoCriado(topico: Topico): void {
    this.estadoTopico = 'TopicoCriado';
    this.topicosCriados.push(topico);
  }
}
