import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesStoreService {
  private oldFavorites: string[] = [];
  private favorites: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public favorites$: Observable<string[]> = this.favorites.asObservable();

  constructor() {}

  public setFavorites(favorites: string[]): void {
    this.oldFavorites = this.favorites.value;
    this.favorites.next(favorites);
  }

  public resetFavorites(): void {
    this.favorites.next(this.oldFavorites);
  }
}
