import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { CARROS } from './mock-carros';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  getCarros():  Observable<Carro[]> {
    const carros = of(CARROS);
    return carros;
  }

  constructor() { }
}
