import { TestBed } from '@angular/core/testing';

import { DebugEventsService } from './debug-events.service';

describe('DebugEventsService', () => {
  let service: DebugEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebugEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
