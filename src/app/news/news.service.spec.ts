import { NewsService } from './news.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(`NewsService`, () => {

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

        http.get('http://localhost:3000/api/v1/articles').subscribe();

        backend.expectOne({
          url: 'http://localhost:3000/api/v1/articles',
          method: 'GET'
        });
      })
    )
  );

});
