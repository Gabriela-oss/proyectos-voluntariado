import { Component, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/clases/organizacion';
import { ProyectoVoluntariado } from 'src/app/clases/proyecto-voluntariado';
import { Voluntario } from 'src/app/clases/voluntario';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-proyectos-voluntariado',
  templateUrl: './proyectos-voluntariado.component.html',
  styleUrls: ['./proyectos-voluntariado.component.css']
})
export class ProyectosVoluntariadoComponent implements OnInit {

  voluntarios:Voluntario[] = [
    new Voluntario(1, "Carlos Solis Chavarria", 47, "Costa Rica"),
    new Voluntario(2, "William Solis Chavarria", 45, "Costa Rica"),
    new Voluntario(3, "Joaquin Solis Chavarria", 44, "Costa Rica"),
    new Voluntario(4, "Diego Solis Chavarria", 40, "Costa Rica"),
    new Voluntario(5, "Steven Solis Chavarria", 23, "Costa Rica")
  ];
  
  organizaciones:Organizacion[] = [
    new Organizacion(1, "Fusavo", "Costa Rica"),
    new Organizacion(2, "Consejo de Europa", "Europa"),
    new Organizacion(3, "Banco Mundial", "Estados Unidos"),
    new Organizacion(4, "Lucema", "Costa Rica"),
    new Organizacion(5, "PRO", "Costa Rica")
  ];

  proyectos:ProyectoVoluntariado[]= [
    new ProyectoVoluntariado("Salvando Alcoholicos", "Costa Rica", "30", "5 semanas", this.voluntarios[0], this.organizaciones[0]),
    new ProyectoVoluntariado("Consejos", "Costa Rica", "300", "4 semanas", this.voluntarios[1], this.organizaciones[1]),
    new ProyectoVoluntariado("Administrando tu dinero", "Costa Rica", "500", "3 semanas", this.voluntarios[2], this.organizaciones[2]),
    new ProyectoVoluntariado("Richy", "Costa Rica", "100", "2 semanas", this.voluntarios[3], this.organizaciones[3]),
    new ProyectoVoluntariado("Ayudando a Drogadictos", "Costa Rica", "50", "6 semanas", this.voluntarios[4], this.organizaciones[4])
  ];

  constructor(/*ruta:ActivatedRoute*/) {
    
   }

  ngOnInit(): void {
  }

}
