import { Component } from '@angular/core';
import { AnimalService } from '../../animal.service';
import { Observable } from 'rxjs';
import { animal } from '../../animal.model';

@Component({
  selector: 'app-animal-lista',
  templateUrl: './animal-lista.component.html',
  styleUrls: ['./animal-lista.component.css']
})
export class AnimalListaComponent {

  animais$: Observable<animal[]> | undefined
  colunasTabela = ['id', 'name', 'idade', 'tipo', 'cor'];

  

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.listarAniais();
  }
  
  listarAniais(){
    this.animais$ = this.animalService.listar();
  }

}
