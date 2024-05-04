import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCadastrarEdittarComponent } from './animal-cadastrar-edittar/animal-cadastrar-edittar.component';


const routes: Routes = [
  { path: "animais/cadastrar", component: AnimalCadastrarEdittarComponent },
  { path: "animais/:id", component: AnimalCadastrarEdittarComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalCadastroEditarRoutingModule { }
