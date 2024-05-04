import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalListaRoutingModule } from './animal-lista-routing.module';
import { AnimalListaComponent } from './animal-lista/animal-lista.component';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AnimalListaComponent
  ],
  imports: [
    CommonModule,
    AnimalListaRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class AnimalListaModule {}
