import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizacionComponent } from './proyectos/proyectos-voluntariado/organizacion/organizacion.component';
import { ProyectosVoluntariadoComponent } from './proyectos/proyectos-voluntariado/proyectos-voluntariado.component';
import { VoluntariosComponent } from './proyectos/proyectos-voluntariado/voluntarios/voluntarios.component';

const routes: Routes = [
  {path:'organizacion', component: OrganizacionComponent},
  // {path:'proyectosV/:id', component: ProyectosVoluntariadoComponent},
  {path:'proyectosV', component: ProyectosVoluntariadoComponent},
  {path:'voluntario', component: VoluntariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
