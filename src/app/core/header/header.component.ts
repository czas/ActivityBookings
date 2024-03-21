import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FavoritesStoreService } from 'src/app/shared/state/favorites-store.service';

@Component({
  selector: 'lab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title: string = 'Activity Bookings';
  // public favoritesCount: number = 0;
  // public favorites$ = this.favoritesStore.favorites$;
  public favoritesCount$: Observable<number> = this.favoritesStore.favorites$.pipe(
    map((favorites) => favorites.length)
  );

  constructor(private favoritesStore: FavoritesStoreService) {
    // this.favoritesStore.favorites$.subscribe((favorites) => {
    //   this.favoritesCount = favorites.length;
    // });
  }
}
