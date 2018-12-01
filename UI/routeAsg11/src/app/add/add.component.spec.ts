import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Check if Age is Greater than 1', () => {
      expect(component.isValidAge(10)).toBe(1);
  });

  it('Should Check if Age is less than or equal to 1', () => {
    expect(component.isValidAge(1)).toBe(0);
  });
});
