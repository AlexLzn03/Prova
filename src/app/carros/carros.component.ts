import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';

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

getCarros(): void {
  this.carroService.getCarros()
      .subscribe(carros => this.carros = carros);
}
}
