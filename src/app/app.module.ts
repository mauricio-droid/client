import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroUsuariosComponent } from './registro_usuarios/registro_usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }