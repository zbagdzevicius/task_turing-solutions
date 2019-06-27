import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [UsersComponent, EventsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
