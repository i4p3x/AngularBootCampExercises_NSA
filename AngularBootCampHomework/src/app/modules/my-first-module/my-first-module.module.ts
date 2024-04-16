import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
    RouterModule.forChild(routes)
  ]
})
export class MyFirstModuleModule { }
