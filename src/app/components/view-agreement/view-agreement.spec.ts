import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgreement } from './view-agreement';

describe('ViewAgreement', () => {
  let component: ViewAgreement;
  let fixture: ComponentFixture<ViewAgreement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAgreement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAgreement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
