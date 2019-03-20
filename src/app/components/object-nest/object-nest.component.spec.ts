import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectNestComponent } from './object-nest.component';

describe('ObjectNestComponent', () => {
  let component: ObjectNestComponent;
  let fixture: ComponentFixture<ObjectNestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectNestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
