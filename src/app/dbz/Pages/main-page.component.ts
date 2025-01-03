import { Component } from '@angular/core';
import { Character } from '../Interfaces/Characters.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: './main-page.component.html',
    styleUrl: './list.component.css'
})

export class MainDbzComponent  {

    //*Lo ideal seria colocar los servicios en privado, ya que es una buena practicar realizarlo:
    constructor(private dbzService: DbzService){}
    
    get characters(): Character[] {
        //*Aqui, si tu modificas algun valor de tu servicio en tu metodo getters, puedes modificar
        //*la data de tu servicio, que es el arreglo de Character, lo cual no es lo recomendado:
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string): void{
        this.dbzService.onDeleteCharacterById(id);
    }

    onNewChacterDbzMain(Character: Character): void{
        this.dbzService.onNewChacterDbzMain(Character);
    }

}
