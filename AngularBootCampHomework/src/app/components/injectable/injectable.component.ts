import { Component } from '@angular/core';
import { SInjectableService } from '../../services/s-injectable.service';
import { SRootInjectableService } from '../../services/s-root-injectable.service';

@Component({
  selector: 'app-injectable',
  templateUrl: './injectable.component.html',
  styleUrl: './injectable.component.scss'
})
export class InjectableComponent {
  injectableText: string = "";
  persistentData: string = "";
  
  constructor(
    injectableService: SInjectableService,
    rootInjectableService: SRootInjectableService
  ) {
    this.injectableText = injectableService.serviceText;
    this.persistentData = rootInjectableService.persistentData;
  }
}
