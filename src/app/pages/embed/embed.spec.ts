import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Embed } from './embed';

describe('Embed', () => {
  let component: Embed;
  let fixture: ComponentFixture<Embed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Embed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Embed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
