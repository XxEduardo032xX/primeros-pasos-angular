import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

//*Para que un componente que esta en otra carpeta, pueda estar en otro archivo, debe de estar
//*aqui en el modulo, osea el componente debe de estar importado aqui para asi poder
//*usarlo en cualquier otro archivo
@NgModule({
  declarations: [
    AppComponent,
  ],
  //*Todo lo que al final acabe con un Module, estara en los imports ya que es un modulo:
  imports: [
    BrowserModule,
    AppRoutingModule,
    DbzModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
