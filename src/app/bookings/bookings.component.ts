import { Component } from '@angular/core';
import { ACTIVITIES } from '../shared/models/activities.data';
import { Activity } from '../shared/models/activity.type';

@Component({
  selector: 'lab-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent {
  public activity: Activity = ACTIVITIES[3];

  public currentParticipants: number = 2;

  public newParticipants: number = 0;

  public newParticipantsData: any[] = [];

  public totalParticipants: number = this.currentParticipants + this.newParticipants;

  public maxNewParticipants: number =
    this.activity.maxParticipants - this.currentParticipants;

  public booked: boolean = false;

  public activityRangeMessage: string = `The activity is available for ${this.activity.minParticipants} to ${this.activity.maxParticipants} participants`;

  public bookedMessage: string = '';

  public getDisableBookingButton(): boolean {
    return this.newParticipants === 0;
  }

  public getBookedMessage(): string {
    return `Booked for ${this.newParticipants} participants for ${
      this.activity.price * this.newParticipants
    } dollars`;
  }

  public getParticipantsMessage(participant: any): string {
    return `Participant ${participant.id}: ${participant.name} (${participant.age} years old)`;
  }

  public onNewParticipantsChange(event: any) {
    const input: HTMLInputElement = event.target;
    const value = input.value;
    this.newParticipants = parseInt(value, 10);
    this.totalParticipants = this.currentParticipants + this.newParticipants;
    this.newParticipantsData = [];
    for (let i = 0; i < this.newParticipants; i++) {
      this.newParticipantsData.push({
        id: i + 1,
        name: 'Name ' + (i + 1),
        age: 2 * i + 7,
      });
    }
  }

  public onBookClick() {
    this.booked = true;
    this.bookedMessage = `Booked for ${this.newParticipants} participants for ${
      this.activity.price * this.newParticipants
    } dollars`;
    if (this.totalParticipants === this.activity.maxParticipants) {
      this.activity.status = 'sold-out';
      return;
    }

    if (this.totalParticipants >= this.activity.minParticipants) {
      this.activity.status = 'confirmed';
      return;
    }
  }
}
