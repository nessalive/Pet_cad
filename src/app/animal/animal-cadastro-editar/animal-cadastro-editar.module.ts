import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalCadastroEditarRoutingModule } from './animal-cadastro-editar-routing.module';
import { AnimalCadastrarEdittarComponent } from './animal-cadastrar-edittar/animal-cadastrar-edittar.component';


import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AnimalCadastrarEdittarComponent
  ],
  imports: [
    CommonModule,
    AnimalCadastroEditarRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AnimalCadastroEditarModule { }
