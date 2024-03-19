import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/shared/models/activity.type';

@Component({
  selector: 'lab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private url: string = 'http://localhost:3000/activities';
  public activities$: Observable<Activity[]> = this.http.get<Activity[]>(this.url).pipe();
  public favorites: string[] = [];

  constructor(private http: HttpClient) {}

  public onToggleFavorite(slug: string): void {
    const index = this.favorites.indexOf(slug);
    if (index === -1) {
      this.favorites.push(slug);
    } else {
      this.favorites.splice(index, 1);
    }
  }
}
