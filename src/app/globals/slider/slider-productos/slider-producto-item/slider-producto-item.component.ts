import { Component, OnInit, EventEmitter,Input, Output } from '@angular/core';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-slider-producto-item',
  templateUrl: './slider-producto-item.component.html',
  styleUrls: ['./slider-producto-item.component.scss']
})
export class SliderProductoItemComponent implements OnInit {
  @Input() producto: Producto;
  @Output() adicionar = new EventEmitter<Producto>();

  constructor() {
  }

  ngOnInit() {
  }
  agregar() {
    console.log(`Agregado ${this.producto.id}:${this.producto.nombre}`);

    //algun proceso aca...

    //disparar el nuevo evento
    this.adicionar.emit(this.producto);
  }
}
