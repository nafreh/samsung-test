import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  SetClasses() {
    let classes = {
      product: true,
      modelCode: true,
      serialNumber: true 
    }

    return classes;
  }
}
