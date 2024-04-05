import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import {MyFirstComponentComponent} from '../../components/my-first-component/my-first-component.component';

const routes: Routes =[
  {
          path: '',
          component: MyFirstComponentComponent,
          outlet: 'main'
  }];/**/

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFirstModuleRoutingModule, 
    //MyFirstComponentComponent, 
    RouterModule.forChild(routes)
  ]
})
export class MyFirstModuleModule { }
