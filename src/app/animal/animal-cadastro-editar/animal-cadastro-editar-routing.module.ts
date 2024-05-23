import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCadastrarEdittarComponent } from './animal-cadastrar-edittar/animal-cadastrar-edittar.component';
import { AnimalResolverService } from './animal-resolver.service';


const routes: Routes = [
  { path: "", component: AnimalCadastrarEdittarComponent,
    resolve: {animal : AnimalResolverService}
   },
  { path: ":id", component: AnimalCadastrarEdittarComponent,
  resolve: {animal : AnimalResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalCadastroEditarRoutingModule { }
