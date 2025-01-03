import { NgModule } from "@angular/core";
import { HeroComponent } from "./Hero/hero.component";
import { ListComponent } from "./List/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
    //*Si tu solo dejas esta declaracion de esta manera y el componente no lo colocas en los exports
    //*entonces solamente funcionara todo el scope en donde estas ahora pero no se podra acceder
    //*a este componente fuera del scope actual osea al mundo exterior no se podra ser accedido :
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})


export class HeroesModule {}