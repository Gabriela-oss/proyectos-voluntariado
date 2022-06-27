import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from './proyecto';
// import { ProyectoVoluntariado } from 'src/app/clases/proyecto-voluntariado';
// import { Organizacion } from 'src/app/clases/organizacion';
// import { Voluntario } from 'src/app/clases/voluntario';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-proyectos-voluntariado',
  templateUrl: './proyectos-voluntariado.component.html',
  styleUrls: ['./proyectos-voluntariado.component.css']
})
export class ProyectosVoluntariadoComponent implements OnInit {

  proyectos:any;
  constructor(/*ruta:ActivatedRoute*/ private http:HttpClient) {
    
   }
   
   ngOnInit(): void {
     this.http.get<any>('https://tutoriadw.ronnysantamaria.repl.co/api/get').subscribe((data)=>{
       this.proyectos = data;
       console.log(this.proyectos);
     });
  }
}