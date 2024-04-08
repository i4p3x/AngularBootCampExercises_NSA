import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InjectableComponent } from '../../components/injectable/injectable.component'
import { SInjectableService } from '../../services/s-injectable.service';

const routes: Routes = [{
  path: '',
  component: InjectableComponent,
  outlet: 'injectable'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SInjectableService]
})
export class InjectableRoutingModule { }
