import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  
  @Input() buttonValue: string;

  constructor(){
    this.buttonValue = "";
  }

  @Output() buttonClicked = new EventEmitter<string>();

  sendValue(){
    this.buttonClicked.emit(this.buttonValue);
  }
}
