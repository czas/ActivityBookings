import { Component } from '@angular/core';
import { ACTIVITIES } from 'src/app/shared/models/activities.data';
import { Activity } from 'src/app/shared/models/activity.type';

@Component({
  selector: 'lab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public activities: Activity[] = ACTIVITIES;
}
