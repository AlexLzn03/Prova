import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { CARROS } from './mock-carros';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  
  getCarro(id: number): Observable<Carro> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const carro = CARROS.find(h => h.id === id)!;
    return of(carro);
  }
  constructor() { }
}
