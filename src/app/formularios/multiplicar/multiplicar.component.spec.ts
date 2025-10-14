import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicarComponent } from './multiplicar.component';

describe('DistanciaComponent', () => {
  let component: MultiplicarComponent;
  let fixture: ComponentFixture<MultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
