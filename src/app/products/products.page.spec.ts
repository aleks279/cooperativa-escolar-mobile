import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductsPage } from './products.page';
import { ProductsService } from './products.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient ,HttpHandler} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsPage', () => {
  /*let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;
  let productsPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [ProductsPage],
      providers: [ProductsService,HttpClient,HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));



  beforeEach(async () => {
    fixture = await TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a products of 10 elements', () => {
    productsPage = fixture.nativeElement;
    const items = productsPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });*/

   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsPage,ProductsService,HttpClient,HttpHandler]
    });
  });

   it('should be created',inject([ProductsService,HttpClient,HttpHandler,ProductsPage],(page: ProductsPage) =>{
    expect(page).toBeTruthy();
  }));


});