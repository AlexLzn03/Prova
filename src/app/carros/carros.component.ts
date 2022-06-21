import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';

import { CARROS } from '../mock-carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  carros = CARROS;


  constructor() { }

  ngOnInit(): void {
  }

  selectedCarro?: Carro;
onSelect(carro: Carro): void {
  this.selectedCarro = carro;
}
}
