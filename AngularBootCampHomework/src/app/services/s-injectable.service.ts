import { Injectable } from '@angular/core';
import { InjectableModule } from '../modules/injectable/injectable.module';

@Injectable({
  providedIn: InjectableModule
})
export class SInjectableService {

  constructor() { }

  serviceText: string = "I'm an injectable text";
}
