import { Input, Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Input() darkModeRef!: boolean;
  @Output() submitEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  emitSubmitEvent = (form: NgForm) => {
    this.submitEvent.emit(form.form.value);
    form.reset();
  };
}
