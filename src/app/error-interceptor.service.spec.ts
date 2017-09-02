import { TestBed, inject } from '@angular/core/testing';

import { ErrorInterceptorService } from './error-interceptor.service';

describe('ErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorInterceptorService]
    });
  });

  it('should be created', inject([ErrorInterceptorService], (service: ErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
