import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent {
  valor: string;
  temSinal: boolean;
  resultado: boolean;

  @Input() set fromParent(value: string){
    let novoValor =  value;
    value = "k"
    this.updateDisplay(novoValor);
  }

  updateDisplay(value: string){

    console.log(value);
    console.log(this.valor + value);

    if(this.ehSinal(value)){

      const lastIndex = this.valor.length-1;
 
      if(this.temSinal && this.ehSinal(this.valor[lastIndex]))
        this.valor = this.removeUltimoChar(lastIndex);

      else if(this.temSinal && !this.ehSinal(this.valor[lastIndex])){
        this.valor = this.calculaValor();
      }
      
      this.valor += value;
      this.temSinal = true; 
      this.resultado = false;

    }else if(value == "="){
      this.valor = this.calculaValor();
      this.temSinal = false;
      this.resultado = true;

    }else if(this.resultado){
      this.valor = value;
      this.resultado = false;


    }else if(value == "+/-"){
      if(!this.temSinal)
        this.valor = this.negarValor();

    }else if(value == "c"){

      this.valor = "0";
      return;

    }else{

      if(this.valor == "0")
        this.valor = value;

      else
        this.valor +=value;
    }

    
  }

  ehSinal(value: String): boolean{
    if(value == '+' || value == '-' || value == '/' || value == '*' || value == "%")
      return true;
    
    return false;
  }

  removeUltimoChar(index: number){
    return this.valor.substring(0, index);
  }

  calculaValor(){
    return eval(this.valor).toString();
  }

  negarValor(){
    let temp = Number(this.valor) * -1;
    return temp.toString();
  }



  constructor(){
    this.valor = "0";
    this.temSinal = false;
    this.resultado = false;
  }

  

}
