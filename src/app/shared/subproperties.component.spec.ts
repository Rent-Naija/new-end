import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpropertiesComponent } from './subproperties.component';

describe('SubpropertiesComponent', () => {
  let component: SubpropertiesComponent;
  let fixture: ComponentFixture<SubpropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
