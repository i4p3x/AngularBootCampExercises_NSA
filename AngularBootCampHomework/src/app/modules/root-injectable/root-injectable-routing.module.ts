import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootInjectableComponent } from '../../components/root-injectable/root-injectable.component'
import { SRootInjectableService } from '../../services/s-root-injectable.service';

const routes: Routes = [{
  path: '',
  component: RootInjectableComponent,
  outlet: 'root-injectable'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SRootInjectableService]
})
export class RootInjectableRoutingModule { }
