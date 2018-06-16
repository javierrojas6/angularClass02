import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-slider-producto-item',
  templateUrl: './slider-producto-item.component.html',
  styleUrls: ['./slider-producto-item.component.scss']
})
export class SliderProductoItemComponent implements OnInit {
  @Input() producto: Producto;
  constructor() {
  }

  ngOnInit() {
  }

}
