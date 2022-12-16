import { Component, OnDestroy, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
    listEmpleados: Empleado[  ] = [
      {legajo: 1, nombre: 'Juan', apellido: 'Ramirez', sexo: 'Masculino', salario: 25000},
      {legajo: 2, nombre: 'Katherine', apellido: 'Ahumada', sexo: 'Femenino', salario: 32000},
      {legajo: 3, nombre: 'Trinidad', apellido: 'Ramirez', sexo: 'Femenino', salario: 15000},
      {legajo: 4, nombre: 'Vicente', apellido: 'Ramirez', sexo: 'Masculino', salario: 55000},
      {legajo: 5, nombre: 'Ema', apellido: 'Ramirez', sexo: 'Femenino', salario: 25000},
      {legajo: 6, nombre: 'Rambo', apellido: 'Ramirez', sexo: 'Masculino', salario: 5000}
      
    ]

radioButtonSeleccionado= 'Todos';


obtenerTotalEmpleados(): number{
  return this.listEmpleados.length;
}

obtenerTotalFemeninos(): number{
  return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
}
obtenerTotalMasculinos(): number{
  return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
}

empleadoCountRadioButtonChange(radioButtonSelec: string): void{
  this.radioButtonSeleccionado= radioButtonSelec ;
}
}
