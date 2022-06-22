import { Organizacion } from "./organizacion";
import { Voluntario } from "./voluntario";

export class ProyectoVoluntariado {
    nombre_del_proyecto:string = "";
    pais:string = "";  
    poblacion_meta:string = "";
    duracionEnSemanas:string = "";
    voluntarios:Voluntario;
    organizaciones:Organizacion;

    constructor(nombreP:string, pais:string, poblacionM:string, duracionEnSemanas:string, voluntarios:Voluntario, organizaciones:Organizacion){
        this.nombre_del_proyecto = nombreP;
        this.pais = pais;
        this.poblacion_meta = poblacionM;
        this.duracionEnSemanas = duracionEnSemanas;
        this.voluntarios = voluntarios; 
        this.organizaciones = organizaciones;
    }
}
