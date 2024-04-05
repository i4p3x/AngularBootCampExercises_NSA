import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DAtributoComponent } from './components/d-atributo/d-atributo.component';
import { DEstrucComponent } from './components/d-estruc/d-estruc.component';
import { DCustomComponent } from './components/d-custom/d-custom.component';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { BindingComponent } from './components/binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DAtributoComponent,
    DEstrucComponent,
    DCustomComponent,
    CapitalizeDirective,
    BindingComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
