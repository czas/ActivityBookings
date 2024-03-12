import { Pipe, PipeTransform } from '@angular/core';
import { Participant } from '../models/participant.type';

@Pipe({
  name: 'participant',
})
export class ParticipantPipe implements PipeTransform {
  transform(participant: Participant, ...args: unknown[]): string {
    return `${participant.name} tiene ${participant.age} años`;
  }
}