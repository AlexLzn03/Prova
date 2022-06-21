import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';

import { CARROS } from '../mock-carros';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  carros: Carro[] = [];


  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
    this.getCarros();
  }

  selectedCarro?: Carro;
onSelect(carro: Carro): void {
  this.selectedCarro = carro;
}
getCarros(): void {
  this.carroService.getCarros()
      .subscribe(carros => this.carros = carros);
}
}
