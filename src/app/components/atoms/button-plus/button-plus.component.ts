import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-button-plus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.css']
})


export class ButtonPlusComponent {
  myRouter: string ='/add'
  constructor(private router: Router) { }

  navRouter(): void {
    if(this.myRouter === '/add'){
      this.router.navigate([this.myRouter]);
      this.myRouter = '/'
    }else{
      this.router.navigate([this.myRouter]);
      this.myRouter = '/add'
    }
  }

}
