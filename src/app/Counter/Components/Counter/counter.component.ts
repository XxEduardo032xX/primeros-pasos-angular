
//*Al crear un componente, lo ideal seria colocarle el archivo con el nombre "counter.component.ts"
//*para que el desarrollador sepa que es un componente, ya que ademas de los componentes, hay 
//*muchas cosas mas, como services, rutas, etc, pero para hacer que la clase sea un componente
//*simplemente debes de colocar "@component" para que sea un componente


//*Angular core, es una seccion de todo el framework de angular que ofrece bastante metodos, decoradores
//* para poder trabajar:


import { Component } from "@angular/core";

//*selector: Sirve para indicar como deseas usar este counter en el html
//*template: Sirve para poder colocar codigo html a partir del selector de tu html
@Component({
    selector: "app-counter",
    template: `
        <hr/>
        <b>Contador desde el componente counter es: {{contador}}</b>
        <hr/>
        <button (click)="incrementasBy(1)">+1</button>
        <button (click)="resetMethod(10)">Reset</button>
        <button (click)="incrementasBy(-1)">-1</button>

    `,
    standalone: false

})
export class CounterComponent{

    public contador: number = 1;

    public incrementasBy(value: number): void{
        this.contador +=value;
    }

    resetMethod(value: number): void{
        this.contador = value;
    }


}

