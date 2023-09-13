import { TestBed } from '@angular/core/testing';

import { HttpLoaderInterceptor } from './http-loader.interceptor';

describe('HttpLoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpLoaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpLoaderInterceptor = TestBed.inject(HttpLoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
