import { Component } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  hworld: String =  "Hello World";
  hworld1: String =  "Hello World1";

  onAlert(){
    alert("I was triggered by an event!");
  }
}
