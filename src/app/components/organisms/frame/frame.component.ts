import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  @Input() index: number = 0

  showImage(): void {
    const frame = document.getElementById(`${this.index}`);
    if (frame && frame.classList.contains('show')) {
      frame.classList.remove('show')
    } else {
      frame?.classList.add('show')
    }
  }
}
