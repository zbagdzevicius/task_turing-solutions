import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.component.html',
  styleUrls: ['./new-event-modal.component.scss']
})
export class NewEventModalComponent implements OnInit {
  @Output() addNewEvent = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  usersList: User[];
  newEventFormGroup: FormGroup;
  checked = [];

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private eventService: EventService) { }

  ngOnInit() {
    this.newEventFormGroup = this.formBuilder.group({
      users: new FormArray([]),
      eventName: ['']
    })
    this.userService.get()
      .subscribe((users: User[]) => {
        // console.log(users);
        this.usersList = users;
        this.addCheckboxes(users);
      })
  }
  addCheckboxes(users) {
    users.map((o, i) => {
      const control = new FormControl();
      (this.newEventFormGroup.controls.users as FormArray).push(control);
    });
  }

  newEvent() {
    this.addNewEvent.emit('new event created');
  }

  closedModal() {
    this.closeModal.emit('closed modal');
  }

  submit() {
    let userIds = '';
    const formValues = this.newEventFormGroup.value
    formValues.users.forEach((checkboxValue, index) => {
      if (checkboxValue) {
        console.log(this.usersList[index]);
        userIds += this.usersList[index]['id'];
        if (formValues.users.length === index) {
          userIds += ','
        }
      }
    });
    this.eventService.post({
      userIds,
      title: formValues.eventName, date: formValues.eventName,
      city: formValues.eventName
    }).subscribe(data => {
      this.closedModal();
    })
  }

  changePositions(index) {
    // const indexOfCheckedItem = this.checked.indexOf(index);
    // const isChecked = this.newEventFormGroup.value.users[index] === true
    // console.log(index, indexOfCheckedItem);
    // if (indexOfCheckedItem === -1 && !isChecked) {
    //   this.checked.push(index);
    // } else {
    //     this.checked.splice(index, 1);
    // }
  }


}
