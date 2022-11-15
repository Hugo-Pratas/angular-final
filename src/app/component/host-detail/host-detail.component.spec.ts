import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDetailComponent } from './host-detail.component';

describe('HostDetailComponent', () => {
  let component: HostDetailComponent;
  let fixture: ComponentFixture<HostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
