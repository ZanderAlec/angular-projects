import { Component, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  display: string;
  display2: string;
  temSinal: boolean;
  resultado: boolean;
  isUp: boolean;


  constructor(){
    this.display= "0";
    this.temSinal = false;
    this.resultado = false;
    this.display2 = "";
    this.isUp = false;
  }

  bttnclicked(bttnValue: string){
    const lastIndex = this.display.length-1;

    if(this.isSignal(bttnValue)){

      if(this.temSinal && this.isSignal(this.display[lastIndex]))
        this.display = this.removeLastChar(lastIndex);
      
      else if(this.temSinal && !this.isSignal(this.display[lastIndex])){
        this.display = this.calcExpression();
      }
      this.display2 = this.display+bttnValue;
      this.temSinal = true; 
      this.resultado = false;
      this.isUp = true;

    }else if(bttnValue == "="){
      this.display = this.calcExpression();
      this.display2 = "";
      
      this.temSinal = false;
      this.resultado = true;
      this.isUp = false;

    }else if(this.resultado){
      this.display = bttnValue;
      this.resultado = false;


    }else if(bttnValue == "+/-"){
      this.display = this.invertValue();

    }else if(bttnValue == "c"){

      this.display = "0";
      this.display2 = "";
      return;

    }
    else{

      if(this.display == "0" || this.isUp){
        this.display = bttnValue;
        this.isUp = false;

      }else
        this.display += bttnValue;
    }
  }

  isSignal(value: String): boolean{
    if(value == '+' || value == '-' || value == '/' || value == '*' || value == "%")
      return true;
    
    return false;
  }

  removeLastChar(index: number){
    return this.display.substring(0, index);
  }

  calcExpression(){
    return eval(`${this.display2}${this.display}`).toString();
  }

  invertValue(){
    let temp = Number(this.display) * -1;
    return temp.toString();
  }

}
