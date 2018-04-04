import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendaysweatherComponent } from './tendaysweather.component';

describe('TendaysweatherComponent', () => {
  let component: TendaysweatherComponent;
  let fixture: ComponentFixture<TendaysweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendaysweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendaysweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
