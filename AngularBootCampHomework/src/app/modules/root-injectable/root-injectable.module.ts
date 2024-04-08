import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootInjectableComponent } from '../../components/root-injectable/root-injectable.component';
//import { RootInjectableComponent } from './components/root-injectable/root-injectable.component'; 
import { RootInjectableRoutingModule } from './root-injectable-routing.module';


@NgModule({
  declarations: [RootInjectableComponent],
  imports: [
    CommonModule,
    RootInjectableRoutingModule
  ]
})
export class RootInjectableModule { }
