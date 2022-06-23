import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosVoluntariadoComponent } from './proyectos/proyectos-voluntariado/proyectos-voluntariado.component';
import { OrganizacionComponent } from './proyectos/proyectos-voluntariado/organizacion/organizacion.component';
import { VoluntariosComponent } from './proyectos/proyectos-voluntariado/voluntarios/voluntarios.component';
import { HttpClientModule } from '@angular/common/http';
import { OrganizacionesFormComponent } from './formularios/organizaciones-form/organizaciones-form.component';
import { ProyectosFormComponent } from './formularios/proyectos-form/proyectos-form.component';
import { VoluntariosFormComponent } from './formularios/voluntarios-form/voluntarios-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosVoluntariadoComponent,
    OrganizacionComponent,
    VoluntariosComponent,
    OrganizacionesFormComponent,
    ProyectosFormComponent,
    VoluntariosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
