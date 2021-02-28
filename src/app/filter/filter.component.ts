import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  tab: string = '';
  @Input() darkModeRef!: boolean;
  @Output() allClick = new EventEmitter<string>();
  @Output() activeClick = new EventEmitter<string>();
  @Output() completedClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setTab = (clicked: string): void => {
    this.tab = clicked;
  };

  checkTab = (tab: string): boolean => {
    return this.tab === tab;
  };

  emitAllClick = () => {
    this.setTab('');
    this.allClick.emit('');
  };
  emitActiveClick = () => {
    this.setTab('active');
    this.activeClick.emit('active');
  };
  emitCompletedClick = () => {
    this.setTab('completed');
    this.completedClick.emit('completed');
  };
}
