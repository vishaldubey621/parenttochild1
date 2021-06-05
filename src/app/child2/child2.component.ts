import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() parentfunction = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
    }
  sendmessage()
  {
    let data={name:'vishal',age:23}
    this.parentfunction.emit(data)
  }

}
     

