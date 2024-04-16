import { Component } from '@angular/core';
import { SRootInjectableService } from '../../services/s-root-injectable.service';
//import { SInjectableService } from '../../services/s-injectable.service';

@Component({
  selector: 'app-root-injectable',
  templateUrl: './root-injectable.component.html',
  styleUrl: './root-injectable.component.scss'
})
export class RootInjectableComponent {
  //injectableText: string = "";
  persistentData: string = "";

  constructor(
    //injectableService: SInjectableService,
    rootInjectableService: SRootInjectableService
  ) {
    //this.injectableText = injectableService.serviceText;
    this.persistentData = rootInjectableService.persistentData;
  }
}
