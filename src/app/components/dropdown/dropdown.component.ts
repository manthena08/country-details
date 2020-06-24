import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() dropdownList: string[];
  @Input() label: string;
  @Output() selectItem = new EventEmitter<string>();

  selectedValue = '';

  onItemChange = (event): void => {
    this.selectItem.emit(event.target.value);
  }

}
