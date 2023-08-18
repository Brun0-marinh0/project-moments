import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Moment } from 'src/app/Moment'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @Input() btnText!: string
  @Output() onSubmit = new EventEmitter<Moment>()

  momentForm!: FormGroup
  imageSrc: any

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })
  }

  get title() {
    return this.momentForm.get('title')!
  }

  get description() {
    return this.momentForm.get('description')!
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file: File = event.target.files[0];

        this.momentForm.patchValue({image: file})

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result 

        console.log(this.imageSrc)

        reader.readAsDataURL(file);
    }
}

submit(){
  if (this.momentForm.invalid){
    return
  }
  console.log(this.momentForm.value)

  this.onSubmit.emit(this.momentForm.value)
}

}
