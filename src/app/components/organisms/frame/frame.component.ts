import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<void>();

  select() {
    this.selected.emit();
    this.isSelected = !this.isSelected
  }
}
