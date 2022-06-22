import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosVoluntariadoComponent } from './proyectos-voluntariado.component';

describe('ProyectosVoluntariadoComponent', () => {
  let component: ProyectosVoluntariadoComponent;
  let fixture: ComponentFixture<ProyectosVoluntariadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosVoluntariadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosVoluntariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
