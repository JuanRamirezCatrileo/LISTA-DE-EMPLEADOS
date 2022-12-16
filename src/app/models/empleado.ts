export class Empleado{
    legajo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;

        constructor(leg: number, nombre:string, apellido:string, sexo:string, salario:number){
            this.legajo = leg;
            this.nombre= nombre;
            this.apellido = apellido;
            this.sexo= sexo;
            this.salario= salario;
        }
}