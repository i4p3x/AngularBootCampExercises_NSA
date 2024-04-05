import {
  Directive,
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[capitalize]'  
})
export class CapitalizeDirective {  
  
  constructor(private el: ElementRef ) { 
    
  }  
  
  /*@HostListener('input', ['$event']) onKeyUp(event:any) {
    event.target['value'] = event.target['value'].toUpperCase();
  }*/
  @HostListener('blur') onBlur() {    
    if (this.el.nativeElement.value) {      
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
   }
  }
}


