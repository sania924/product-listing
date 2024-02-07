import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
