import { TestBed } from '@angular/core/testing';

import { FortuneService } from './fortune.service';

describe('FortuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FortuneService = TestBed.get(FortuneService);
    expect(service).toBeTruthy();
  });
});
