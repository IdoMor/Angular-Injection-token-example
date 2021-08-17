import { TestBed } from '@angular/core/testing';

import { MeaningfulService } from './meaningful.service';

describe('MeaningfulService', () => {
  let service: MeaningfulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeaningfulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
