import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/Characters.interface';
import { v4 as uuid } from 'uuid'


//*Este decorador le dice a angular que esta clase debe de ser un servicio, el cual
//*todo servicio desde la version 6 vendra con "providedIn: 'root'" el cual el servicio sera
//*un singleton de forma x defecto, esto quiere decir que no importa en cuantos lugares utilice este
//*servicio, siempre voy a tener el valor exactamente como se encuentra en ese momento en el servicio
//*y esos valores se podran apreciar en cualquier componente que use este servicio:
@Injectable({
    providedIn: 'root'
})

//*Le cambias el nombre de la clase, ya que esto representara el nombre del servicio:
export class DbzService {
    
    public characters: Character[] = [
        {
            id: uuid(),
            name: "goku",
            power: 10000
        },
        {
            id: uuid(),
            name: "krilin",
            power: 20
        }
    ];

    onNewChacterDbzMain(CharacterDbz:Character):void {

        //*...CharacterDbz: Al colocar esto, estamos diciendo que tomes todas las propiedades
        //*del objeto y ponlo en este objeto nuevo que estoy creando:
        const newCharacterDbz: Character = {id: uuid(), ...CharacterDbz};

        
        this.characters.push(newCharacterDbz);
    }

    //* onDeleteDbzMain(index: number): void{
        // console.log("Desde el componente padre, index:");
        // this.characters.splice(index, 1);
    // }

    onDeleteCharacterById(id: string): void{

        //*Retorname todos los elementos del arreglo characters, en donde el id que tenga cada elemento
        //*no sea igual al id nuevo que me estan pasando:
        this.characters = this.characters.filter(element => element.id !== id);

        
    }

}


