import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefranceComponent } from './refrance.component';

describe('RefranceComponent', () => {
  let component: RefranceComponent;
  let fixture: ComponentFixture<RefranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
