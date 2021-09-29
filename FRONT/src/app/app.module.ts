import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarTarefaComponent } from './components/views/tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './components/views/tarefa/listar-tarefa/listar-tarefa.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HearderComponent } from './components/hearder/hearder.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarTarefaComponent,
    ListarTarefaComponent,
    HearderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
