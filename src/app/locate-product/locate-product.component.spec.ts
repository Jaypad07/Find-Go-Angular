import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateProductComponent } from './locate-product.component';

describe('LocateProductComponent', () => {
  let component: LocateProductComponent;
  let fixture: ComponentFixture<LocateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocateProductComponent]
    });
    fixture = TestBed.createComponent(LocateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
