import { ProductsService } from './products.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(`ProductService`, () => {
  let chttp:HttpClient;
  let p: ProductsService = new ProductsService(chttp);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it(`should issue a request`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
      	var url = p.apiUrl;
        http.get(`${url}api/v1/products`).subscribe();


        backend.expectOne({
          url: 'http://localhost:3000/api/v1/products',
          method: 'GET'
        });
      })
    )
  );

});