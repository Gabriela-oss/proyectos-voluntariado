import { Component, OnInit } from '@angular/core';
import { Organizacion } from 'src/app/clases/organizacion';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})
export class OrganizacionComponent implements OnInit {
  organizaciones:Organizacion[];
  
  constructor() { 
    this.organizaciones = [
      new Organizacion(1, "Fusavo", "Costa Rica"),
      new Organizacion(2, "Consejo de Europa", "Europa"),
      new Organizacion(3, "Banco Mundial", "Estados Unidos"),
      new Organizacion(4, "Lucema", "Costa Rica"),
      new Organizacion(5, "PRO", "Costa Rica"),
    ]
  }

  ngOnInit(): void {
  }

}
