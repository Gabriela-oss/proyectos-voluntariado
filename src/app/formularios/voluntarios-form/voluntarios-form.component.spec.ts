import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosFormComponent } from './voluntarios-form.component';

describe('VoluntariosFormComponent', () => {
  let component: VoluntariosFormComponent;
  let fixture: ComponentFixture<VoluntariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntariosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
