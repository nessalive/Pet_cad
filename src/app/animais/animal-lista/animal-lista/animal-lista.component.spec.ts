import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListaComponent } from './animal-lista.component';

describe('AnimalListaComponent', () => {
  let component: AnimalListaComponent;
  let fixture: ComponentFixture<AnimalListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalListaComponent]
    });
    fixture = TestBed.createComponent(AnimalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
