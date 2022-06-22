export class Voluntario {
    id:number = 0;
    nombre:string = "";
    edad:number = 0; 
    pais_de_origen:string = "";
    
    constructor(id:number, nombre:string, edad:number, pais_de_origen:string){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.pais_de_origen = pais_de_origen;
    }
}
