import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/shared/models/activity.type';
import { HomeService } from './home.service';

@Component({
  selector: 'lab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public favorites: string[] = this.service.favorites;

  public activities$: Observable<Activity[]> = this.service.getActivities$();

  constructor(private service: HomeService) {}

  public onToggleFavorite(slug: string): void {
    this.service.toggleFavorite(slug);
  }
}
