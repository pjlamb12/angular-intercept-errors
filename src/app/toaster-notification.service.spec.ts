import { TestBed, inject } from '@angular/core/testing';

import { ToasterNotificationService } from './toaster-notification.service';

describe('ToasterNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterNotificationService]
    });
  });

  it('should be created', inject([ToasterNotificationService], (service: ToasterNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
