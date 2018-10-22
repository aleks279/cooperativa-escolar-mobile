import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';
import { switchMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Product } from './products.model';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss']
})

export class ProductsPage implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      }, console.error
    );
  }

  ngOnInit() {
  }
}
