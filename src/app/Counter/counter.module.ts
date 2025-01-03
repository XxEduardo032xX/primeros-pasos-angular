import { NgModule } from "@angular/core";
import { CounterComponent } from "./Components/Counter/counter.component";


@NgModule({
    //*Aqui debemos de declarar que componente deseamos exportar para colocarlo en loe exports:
    declarations:[
        CounterComponent
    ],
    //*Para poder exportar esto a otros archivos, debemos de hacer esto:
    exports:[
        CounterComponent
    ]
})

export class CounterModule {}
