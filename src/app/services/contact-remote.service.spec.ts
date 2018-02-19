import { TestBed, inject } from '@angular/core/testing';

import { ContactRemoteService } from './contact-remote.service';

describe('ContactRemoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactRemoteService]
    });
  });

  it('should be created', inject([ContactRemoteService], (service: ContactRemoteService) => {
    expect(service).toBeTruthy();
  }));
});
