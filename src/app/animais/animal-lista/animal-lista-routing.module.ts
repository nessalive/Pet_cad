import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListaComponent } from './animal-lista/animal-lista.component';

const routes: Routes = [
  {path: "", component: AnimalListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalListaRoutingModule { }
