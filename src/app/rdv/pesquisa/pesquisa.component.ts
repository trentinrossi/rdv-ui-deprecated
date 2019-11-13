import { UserData } from './../../core/user-data';
import { Cliente, Rdv, RdvRequestBody } from './../../core/model';
import { RdvService } from './../rdv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  cliente: Cliente;
  requestRdv: RdvRequestBody = new RdvRequestBody();
  clientes = [];
  rdvs = [];
  dadosUsuario = new UserData();
  selected: Rdv;
  totalRdvs: number;
  codigoRdv: number;
  loading: boolean;

  constructor(
    private service: RdvService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getDadosUsuario();
  }

  // Busca os dados do usuário autenticado
  getDadosUsuario() {
    this.service.getDadosUsuario().subscribe(data => {
      this.dadosUsuario = data;
      this.retornaTodosRdvs();
    });
  }

  pesquisaCliente(event: { query: any; }) {
    this.service.pesquisarCliente(event.query)
      .then(data => this.clientes = data);
  }

  retornaTodosRdvs() {
    console.log(this.dadosUsuario);
    this.requestRdv.nomeUsuarioLogado = this.dadosUsuario.nome;

    this.service.getTodosRdvs(this.requestRdv).subscribe(data => {
      this.rdvs = data;
      this.totalRdvs = this.rdvs.length;
      this.loading = false;
    });
  }

  filtrar(event: any) {
    console.log(this.cliente);
    this.requestRdv.nomeUsuarioLogado = this.dadosUsuario.nome;
    this.requestRdv.codigoCliente = this.cliente.codigo;

    this.service.getTodosRdvs(this.requestRdv).subscribe(data => {
      this.rdvs = data;
      this.totalRdvs = this.rdvs.length;
    });
  }

  onRowSelect(event) {
    console.log(event);
    this.codigoRdv = event.codigoRdv;
  }
}
