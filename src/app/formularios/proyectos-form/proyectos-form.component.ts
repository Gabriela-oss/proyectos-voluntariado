import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.css']
})
export class ProyectosFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addData(name:string, goalPopulation:string, country:string, duration:string){
    let ageA:number = parseInt(duration)
    let project = {nombre:name,poblacionMeta:goalPopulation, pais:country, edad:duration, type:"Project"}
    console.log(project);


    // let volunteer:Volunteer = {name: "josue", age: 22, country: "CR", type: "volunteer"};

    // this.http.post('https://tutoriadw.ronnysantamaria.repl.co/api/add', volunteer).subscribe(data => {
    //     console.log(data);
    //});
}

}
