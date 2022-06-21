import { Component, OnInit, Input } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.css']
})
export class CarroDetailComponent implements OnInit {
  @Input() carro?: Carro;

  constructor() { }

  ngOnInit(): void {
  }

}
