import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './elements/button/button.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { UserComponent } from './elements/user/user.component';
import { EventComponent } from './elements/event/event.component';
import { NewEventModalComponent } from './components/new-event-modal/new-event-modal.component';

const COMPONENTS = [
  HeaderComponent, UsersListComponent, EventsListComponent
];
const ELEMENTS = [
  ButtonComponent, UserComponent, EventComponent
];

@NgModule({
  declarations: [...COMPONENTS,
  ...ELEMENTS,
  NewEventModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
