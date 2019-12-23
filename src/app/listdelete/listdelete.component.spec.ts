import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeleteComponent } from './listdelete.component';

describe('ListdeleteComponent', () => {
  let component: ListdeleteComponent;
  let fixture: ComponentFixture<ListdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
