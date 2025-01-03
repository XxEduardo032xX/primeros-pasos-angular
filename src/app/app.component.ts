//*ESTE ARCHIVO ES EL ARCHIVO PRINCIPAL DEL COMPONENTE, ES EL CEREBRO, CORAZON, TODO DEL COMPONENTE

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})


//*Esto de aqui, no es mas que una clase que simplemente declara una variable de tipo "public"
//*que se podra acceder desde el "app.component.html" usando {{}}
export class AppComponent {
  public title: string = 'Mi primer programa';
  public contador: number = 1;

  //*No es tan comun colocar "public" ya que al no colocar "public" en una funcion, se entiende
  //*que es publica, a menos que desees hacerlo privado, ahi si coloca el "private"
  public incrementasBy(value: number): void{
    this.contador +=value;
  }

  resetMethod(value: number): void{
    this.contador = value;
  }

}
