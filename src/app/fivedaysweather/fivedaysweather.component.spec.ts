import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivedaysweatherComponent } from './fivedaysweather.component';

describe('FivedaysweatherComponent', () => {
  let component: FivedaysweatherComponent;
  let fixture: ComponentFixture<FivedaysweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivedaysweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivedaysweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
