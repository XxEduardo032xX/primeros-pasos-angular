import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MainDbzComponent } from './Pages/main-page.component';
import { ListComponent } from './Components/list/list.component';
import { FormComponent } from './Components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainDbzComponent,
    ListComponent,
    FormComponent
  ],
  exports: [
    MainDbzComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]

})
export class DbzModule { }
