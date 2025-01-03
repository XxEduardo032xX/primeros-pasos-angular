import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/Characters.interface';

@Component({
  selector: 'app-dbz-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitMessage():void{
    
    if(this.character.name.length === 0) return;
    
    this.onNewCharacter.emit(this.character);

    //*De esta manera puedes colocar los valores del objeto en vacio cuando se envia
    this.character = {name: '', power: 0}
  }

}
