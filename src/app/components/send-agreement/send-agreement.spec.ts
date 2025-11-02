import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAgreement } from './send-agreement';

describe('SendAgreement', () => {
  let component: SendAgreement;
  let fixture: ComponentFixture<SendAgreement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendAgreement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendAgreement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
