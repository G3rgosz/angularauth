import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesztoldalComponent } from './tesztoldal.component';

describe('TesztoldalComponent', () => {
  let component: TesztoldalComponent;
  let fixture: ComponentFixture<TesztoldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesztoldalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesztoldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
