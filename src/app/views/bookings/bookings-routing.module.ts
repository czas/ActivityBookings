import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings.component';

const routes = [
  {
    path: '',
    component: BookingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
