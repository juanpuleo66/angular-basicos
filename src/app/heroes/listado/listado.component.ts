import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  heroeBorrado: string = '';

  constructor() {}

  ngOnInit(): void {}

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.error('this.heroeBorrado', this.heroeBorrado);
  }
}
