import { Component, OnInit } from '@angular/core';
import { Voluntario } from 'src/app/clases/voluntario';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {
  voluntarios:Voluntario[];

  constructor() { 
    this.voluntarios = [
      new Voluntario(1, "Carlos Solis Chavarria", 47, "Costa Rica"),
      new Voluntario(2, "William Solis Chavarria", 45, "Costa Rica"),
      new Voluntario(3, "Joaquin Solis Chavarria", 44, "Costa Rica"),
      new Voluntario(4, "Diego Solis Chavarria", 40, "Costa Rica"),
      new Voluntario(5, "Steven Solis Chavarria", 23, "Costa Rica")
    ]
  }

  ngOnInit(): void {
  }

}
