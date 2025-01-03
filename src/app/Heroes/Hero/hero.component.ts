import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  //*La interpolacion, es simplemente pasar estos datos a la vista, usando {{}} que es como un comodin
  //*para poder mostrar esos valores en la vista

  //*El one way databiding es pasar los valores del codigo a la vista y evitar que la vista
  //* modifique los valores del codigo, xq eso seria el two way databiding, lo cual en angular
  //* no es recomendado usarlo, sino es recomendado usar el one way dabiding:

  public Name:string = "Sebastian";
  public Age:number = 20;


  get methodPerson(): string{
    return `Nombre: ${this.Name}, Edad: ${this.Age}`;
  }

  public changeName(value: string): void{
    this.Name = value;
  }

  public changeAge(value: number){
    this.Age = value;
  }

    
  //*Aqui lo ideal seria no tocar nada del dom, osea en no modificar elemento del dom con codigo de js, ya que si
  //*al momento de modificar algun elemento del DOM con codigo de TS con eventos, probablemente no funcione ya que como estamos
  //*cambiando los valores desde aqui, que es el componente, hacemos que los valores no cambien x eso es ideal no modoficar el DOM desde aqui
  //*sino modificarlo A TRAVES DE LAS VARIABLES QUE NOSOTROS CREEMOS EN ESTA CLASE


}
