import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../Interfaces/Characters.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteChange: EventEmitter<string> = new EventEmitter();

  //*El @Input, es un decorador que sirve para poder mandar informacion a traves del componente
  //*padre al hijo, de forma facil, si tu dejas @Input(), el nombre del input sera por defecto
  //*"characterList", ya que no estas colocando ningun nombre en los (), pero si deseas cambiarle el 
  //*nombre, simplemente colocar en string el nombre que deseas en el ()
  @Input()
  public characterList: Character[] = [{
    name: "trunks",
    power: 10
  }];



  onDeleteButton(index: string): void{
    console.log({index});
    

    this.onDeleteChange.emit(index);
  }

}
