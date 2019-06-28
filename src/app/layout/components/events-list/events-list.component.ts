import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/core/models/event';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[];
  newEventModal = false;

  constructor(private eventService: EventService) {
    this.getEvents();
  }

  ngOnInit() {
  }

  getEvents(){
    this.eventService.get()
    .subscribe(
      (events: Event[]) => {this.events = events; console.log(events)}
    )
  }

}
