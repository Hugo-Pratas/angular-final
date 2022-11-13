import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCatalogComponent } from './house-catalog.component';

describe('HouseCatalogComponent', () => {
  let component: HouseCatalogComponent;
  let fixture: ComponentFixture<HouseCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
