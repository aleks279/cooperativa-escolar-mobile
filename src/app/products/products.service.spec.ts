import { ProductsService } from './products.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient ,HttpHandler} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(`ProductService`, () => {
  /*let chttp:HttpClient;
  let p: ProductsService = new ProductsService(chttp);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService,HttpClient,HttpHandler]
    });
  });

  /*it(`should issue a request`,
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
  );*/

  it('should be created',inject([ProductsService,HttpClient,HttpHandler],(service: ProductsService) =>{
    expect(service).toBeTruthy();
  }));
  it('should have getProducts',inject([ProductsService,HttpClient,HttpHandler],(service: ProductsService) =>{
    expect(service.getProducts).toBeTruthy();
  }));
  it('should have appiUrl',inject([ProductsService,HttpClient,HttpHandler],(service: ProductsService) =>{
    expect(service.apiUrl).toBeTruthy();
  }));

});