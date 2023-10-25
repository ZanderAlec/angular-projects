import { Component, ViewChild } from '@angular/core';
import { BotaoComponent } from './botao/botao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  childValue: string = "";

  receveValue($event: any){
    this.childValue = $event;
  }

}
