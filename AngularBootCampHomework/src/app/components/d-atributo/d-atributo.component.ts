import { Component } from '@angular/core';

@Component({
  selector: 'app-d-atributo',
  templateUrl: './d-atributo.component.html',
  styleUrl: './d-atributo.component.scss'
})
export class DAtributoComponent {
  active: boolean = false;   
  
  cambiarFlag(){
    this.active = !this.active;
  }
}
