import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsPage } from './products.page';
import { ProductsService } from './products.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient ,HttpHandler} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsPage', () => {

   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsPage,ProductsService,HttpClient,HttpHandler]
    });
  });

   it('should be created',inject([ProductsService,HttpClient,HttpHandler,ProductsPage],(page: ProductsPage) =>{
    expect(page).toBeTruthy();
  }));
});