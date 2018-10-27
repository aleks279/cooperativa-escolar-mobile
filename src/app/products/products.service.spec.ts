import { ProductsService } from './products.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient ,HttpHandler} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(`ProductService`, () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService,HttpClient,HttpHandler]
    });
  });


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