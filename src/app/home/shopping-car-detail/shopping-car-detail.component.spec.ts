import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarDetailComponent } from './shopping-car-detail.component';

describe('ShoppingCarDetailComponent', () => {
  let component: ShoppingCarDetailComponent;
  let fixture: ComponentFixture<ShoppingCarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
