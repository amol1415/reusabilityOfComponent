import { Component } from '@angular/core';

@Component({
  selector: 'app-refrance',
  templateUrl: './refrance.component.html',
  styleUrls: ['./refrance.component.css']
})
export class RefranceComponent {
  public ary: any = [1, 2, 3, 4, 5];
  addData(data: any) {
    console.log(data);
    this.ary.push(data);
  }


  deleteData(data: any) {
    console.log(data);
    let index = this.ary.findIndex((x: any) => x.id == data.id)
    this.ary.splice(index, 1)

  }



  // for counter

  public counter: number = 0;
  addData1() {
    this.counter++;
  }

  deleteData2() {
    if (this.counter > 0) this.counter--;
  }



}
