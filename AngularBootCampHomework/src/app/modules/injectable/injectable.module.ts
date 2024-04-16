import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableComponent } from '../../components/injectable/injectable.component'
import { InjectableRoutingModule } from './injectable-routing.module';


@NgModule({
  declarations: [InjectableComponent],
  imports: [
    CommonModule,
    InjectableRoutingModule
  ]
})
export class InjectableModule { }
