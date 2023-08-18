import { Component, Output, EventEmitter } from '@angular/core';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  

  btnText = 'Compartilhar'

  createHandler(event: any){
    console.log("oi")
  }
}
