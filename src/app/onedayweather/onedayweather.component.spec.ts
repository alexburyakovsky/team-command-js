import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedayweatherComponent } from './onedayweather.component';

describe('OnedayweatherComponent', () => {
  let component: OnedayweatherComponent;
  let fixture: ComponentFixture<OnedayweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnedayweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnedayweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
