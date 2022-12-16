import { Component,Output, InputDecorator, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {

  @Input() todos: number;
  @Input() femenino: number;
  @Input() masculino: number;

  @Output() countRadioButtonChange = new EventEmitter<string>();
  
  radioButtonSeleccionado= 'Todos';

  constructor(){
    this.todos= 0;
    this.femenino=0;
    this.masculino=0;
  }

  ngOnInit(): void{
    console.log(this.todos);
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado)
  }
}
