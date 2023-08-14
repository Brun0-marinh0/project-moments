import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @Input() btnText!: string

  myImage = ''

  previewImg(e: any){
    
  }
}
