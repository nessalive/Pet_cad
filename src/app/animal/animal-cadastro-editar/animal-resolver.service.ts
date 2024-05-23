import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, filter, take } from 'rxjs';
import { animal } from 'src/app/animais/animal.model';
import { AnimalService } from 'src/app/animais/animal.service';

Injectable({
  providedIn: 'root',
});
export const AnimalResolverService: ResolveFn<animal> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  postsFacade: AnimalService = inject(AnimalService)
): Observable<animal> => {
  if(!route.params['id']) return new Observable<animal>();
  
  return postsFacade.pesquisarPorId(route.params['id']).pipe(
    filter<animal>((post: animal) => !!post),
    take(1)
  );
};
