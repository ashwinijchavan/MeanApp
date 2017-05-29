import { TestBed, inject } from '@angular/core/testing';

import { CnkService } from './cnk.service';

describe('CnkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnkService]
    });
  });

  it('should be created', inject([CnkService], (service: CnkService) => {
    expect(service).toBeTruthy();
  }));
});
