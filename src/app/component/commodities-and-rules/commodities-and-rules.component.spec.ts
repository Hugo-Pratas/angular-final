import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditiesAndRulesComponent } from './commodities-and-rules.component';

describe('CommoditiesAndRulesComponent', () => {
  let component: CommoditiesAndRulesComponent;
  let fixture: ComponentFixture<CommoditiesAndRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoditiesAndRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommoditiesAndRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
