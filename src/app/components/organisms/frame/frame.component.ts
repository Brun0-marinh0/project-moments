import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  @Input() index: number = 0

  showImage(index: number){
    console.log(index)
  }
}
