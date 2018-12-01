import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Check if Name is an Existing employee', () => {
    expect(component.isValidEmployee("Name1")).toBe(1);
  });

  it('Should Check if Name is not an existing Employee', () => {
    expect(component.isValidEmployee("Name2")).toBe(0);
  });  
});
