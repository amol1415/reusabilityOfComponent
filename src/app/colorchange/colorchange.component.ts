import { Component } from '@angular/core';

@Component({
  selector: 'app-colorchange',
  templateUrl: './colorchange.component.html',
  styleUrls: ['./colorchange.component.css']
})
export class ColorchangeComponent {


  blackColor() {
    document.body.style.backgroundColor = 'black'
  }
  pinkColor() {
    document.body.style.backgroundColor = 'pink'

  }
  redColor() {
    document.body.style.backgroundColor = 'red'

  }
}
