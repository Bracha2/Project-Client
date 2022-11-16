import { NgModule, NgModuleRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { FormsModule } from '@angular/forms';
import { CitiesModule } from '../cities/cities.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CitiesModule,
  
  ],
  exports:[ClientComponent]
})
export class ClientModule { }
