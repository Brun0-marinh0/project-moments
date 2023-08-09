import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-home',
  templateUrl: './template-home.component.html',
  styleUrls: ['./template-home.component.css']
})
export class TemplateHomeComponent {
  ngOnInit() {
    this.scrollH()
  }
  scrollH(){
    const list : any = document.getElementById('list')

    list.addEventListener('wheel', (e:any) => {
      e.preventDefault()
      list.scrollLeft += e.deltaY
    })
  }
}
