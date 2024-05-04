import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { animal } from '../animais/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'animal';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<animal[]> {
    return this.httpClient.get<animal[]>(`${this.baseURL}/${this.endpoint}`);
  }

  cadastrar(animal: animal): Observable<animal> {
    const capitalizeFirstLetter = (str: string) => {
      return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    };
    const animalComCamposCapitalizados: animal = {
      id: animal.id,
      nome: capitalizeFirstLetter(animal.nome),
      idade: animal.idade,
      tipo: capitalizeFirstLetter(animal.tipo),
      cor: capitalizeFirstLetter(animal.cor)
    };
    return this.httpClient.post<animal>(`${this.baseURL}/${this.endpoint}`, animalComCamposCapitalizados);
  }


  pesquisarPorId(id: string): Observable<animal> {
    return this.httpClient.get<animal>(`${this.baseURL}/${this.endpoint}/${id}`)
  }

  atualizar(animal: animal): Observable<animal> {
    return this.httpClient.put<animal>(`${this.baseURL}/${this.endpoint}/${animal.id}`, animal)
  }

  deletar(animal: animal): Observable<{}> {
    return this.httpClient.delete<animal>(`${this.baseURL}/${this.endpoint}/${animal.id}`)
  }
  
}

