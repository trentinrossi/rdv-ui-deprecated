import { RdvService } from './../rdv/rdv.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RdvHttp } from '../rdv/rdv-http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [

  ],
  providers: [
    RdvService,

    RdvHttp
  ]
})
export class CoreModule { }
