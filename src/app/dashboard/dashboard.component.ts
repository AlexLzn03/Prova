import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  carros: Carro[] = [];

  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.getCarros();
  }

  getCarros(): void {
    this.carroService.getCarro(12)
      .subscribe(carros => this.carros = carros.slice(1, 5));
  }
}