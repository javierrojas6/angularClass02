import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-slider-productos',
  templateUrl: './slider-productos.component.html',
  styleUrls: ['./slider-productos.component.scss']
})
export class SliderProductosComponent implements OnInit {
  productos: Array<Producto>;
  constructor() {
    this.productos = new Array<Producto>();

    for (let i = 0; i < 10; i++) {
      let p = new Producto();
      p.nombre = `nombre ${i}`;
      p.descripcion = `descripcion ${i}`;
      p.imagen = `http://dfadg${i}.jpg`;

      this.productos.push(p);
    }
  }

  ngOnInit() {
  }

}
