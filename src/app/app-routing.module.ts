import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: 'animais',
    loadChildren: () => import('./animais/animal-lista/animal-lista.module').then(m => m.AnimalListaModule)
  },
  {
    path: 'animais/cadastrar',
    loadChildren: () => import('./animal/animal-cadastro-editar/animal-cadastro-editar.module').then(m => m.AnimalCadastroEditarModule)
  },
  {
    path: 'animal/:id',
    loadChildren: () => import('./animal/animal-cadastro-editar/animal-cadastro-editar.module').then(m => m.AnimalCadastroEditarModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
