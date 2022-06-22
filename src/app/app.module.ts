import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosVoluntariadoComponent } from './proyectos/proyectos-voluntariado/proyectos-voluntariado.component';
import { OrganizacionComponent } from './proyectos/proyectos-voluntariado/organizacion/organizacion.component';
import { VoluntariosComponent } from './proyectos/proyectos-voluntariado/voluntarios/voluntarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosVoluntariadoComponent,
    OrganizacionComponent,
    VoluntariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
