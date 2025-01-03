import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ["Spiderman", "Hulk", "Iron man", "Capitan america"];
  public deleteHero?:string;

  deleteHeroChange():void{
    this.deleteHero = this.heroesName.pop();
  }

}
