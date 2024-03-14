import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';

@NgModule({
  declarations: [BookingsComponent],
  imports: [CommonModule, BookingsRoutingModule, SharedModule],
  providers: [],
})
export class BookingsModule {}
