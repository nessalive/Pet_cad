import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { animal } from 'src/app/animais/animal.model';
import { AnimalService } from 'src/app/animais/animal.service';

@Component({
  selector: 'app-animal-cadastrar-edittar',
  templateUrl: './animal-cadastrar-edittar.component.html',
  styleUrls: ['./animal-cadastrar-edittar.component.css']
})
export class AnimalCadastrarEdittarComponent {

  formGroup!: FormGroup;
  animal!: animal;
 

  
  constructor(private formBuilder: FormBuilder,
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.animal = this.route.snapshot.data['animal'];
    this.formGroup = this.formBuilder.group({
      id: [this.animal.id?this.animal.id: ""],
      nome: [this.animal.nome?this.animal.nome: "", Validators.required],
      idade: [this.animal.idade?this.animal.idade: "", Validators.required],
      tipo: [this.animal.tipo?this.animal.tipo: "", Validators.required],
      cor: [this.animal.cor?this.animal.cor: "", Validators.required],
    })
  }

  salvar() {
    const teste = this.formGroup.value

    console.log("testando" + JSON.stringify(teste))
    if(this.animal && this.animal.id){
      this.animalService.atualizar(this.formGroup.value).subscribe({
        next: () => { this.router.navigate(['/animais']) },
        error: error => { alert("Erro ao atualizar" + JSON.stringify(error)) }
      });
    }else{
      this.animalService.cadastrar(this.formGroup.value).subscribe({
        next: () => { this.router.navigate(['/animais']) },
        error: error => { alert("Erro ao cadastrar" + JSON.stringify(error)) }
      });
    }
  }

  deletar(){
    if(confirm("Tem certeza que deseja excluir? "+ this.animal.nome)){
      this.animalService.deletar(this.animal).subscribe({
        next: () => { this.router.navigate(['/animais']) },
        error: error => { alert("Erro ao deletar" + JSON.stringify(error)) }
      });
    }
  }
}
