import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SRootInjectableService {

  constructor() { }

  persistentData:string = "I'm a variable inside a singleton";
}
