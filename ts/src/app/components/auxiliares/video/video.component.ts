import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() titulo!: string;
  @Input() videoSrc!: string;
  @Input() nomeAutor: string = '';
  @Input() instituicaoAutor: string = '';
  @Input() iconeAutorSrc: string = '';

  exibirMascara = true;

  constructor() {}

  ngOnInit(): void {}

  rodarVideo(): void {
    this.exibirMascara = false;
  }
}
