import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/core/models/event';
import { User } from 'src/app/core/models/user';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  expanded = false;
  eventUsers: User[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  expand() {
    this.eventService.getUsers(this.event.id)
      .subscribe(
        (eventUsers: User[]) => {
          // console.log(eventUsers);
          this.eventUsers = eventUsers
          this.expanded = true;
        }
      )
  }

}
