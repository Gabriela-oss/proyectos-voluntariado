import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionesFormComponent } from './organizaciones-form.component';

describe('OrganizacionesFormComponent', () => {
  let component: OrganizacionesFormComponent;
  let fixture: ComponentFixture<OrganizacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
