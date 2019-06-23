import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './elements/button/button.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { UserComponent } from './elements/user/user.component';
import { EventComponent } from './elements/event/event.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, UsersListComponent, EventsListComponent, UserComponent, EventComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
