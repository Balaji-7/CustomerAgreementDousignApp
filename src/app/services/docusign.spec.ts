import { TestBed } from '@angular/core/testing';

import { Docusign } from './docusign';

describe('Docusign', () => {
  let service: Docusign;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Docusign);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
