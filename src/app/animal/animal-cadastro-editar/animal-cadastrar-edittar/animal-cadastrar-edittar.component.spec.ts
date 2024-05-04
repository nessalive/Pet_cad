import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCadastrarEdittarComponent } from './animal-cadastrar-edittar.component';

describe('AnimalCadastrarEdittarComponent', () => {
  let component: AnimalCadastrarEdittarComponent;
  let fixture: ComponentFixture<AnimalCadastrarEdittarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalCadastrarEdittarComponent]
    });
    fixture = TestBed.createComponent(AnimalCadastrarEdittarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
