export class Organizacion {
    id:number = 0;
    nombre:string = "";
    pais_de_ONG:string = "";

    constructor(id:number, nombre:string, pais:string){
        this.id = id;
        this.nombre = nombre;
        this.pais_de_ONG = pais;
    }
}
