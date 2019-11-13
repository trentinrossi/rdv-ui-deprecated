import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvRoutingModule } from './rdv-routing.module';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Calendar, CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [PesquisaComponent, CadastroComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PanelModule,
    AutoCompleteModule,
    CalendarModule,
    TableModule,
    ReactiveFormsModule,
    FieldsetModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule,
    TabViewModule,
    SplitButtonModule,

    RdvRoutingModule
  ]
})
export class RdvModule { }
