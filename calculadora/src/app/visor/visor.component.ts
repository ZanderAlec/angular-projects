import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent {
  valor: string;

  @Input() set fromParent(value: string){
    this.updateDisplay(value);
  }

  updateDisplay(value: string){
    this.valor += value;
  }

  constructor(){
    this.valor = "";
  }

  

}
