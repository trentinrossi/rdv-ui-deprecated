import { UserData } from './../../core/user-data';
import { Rdv, RdvRequestByPrimaryKey, Cliente, Empresa } from './../../core/model';
import { RdvService } from './../rdv.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  rdv = new Rdv();
  codigoRdv: number;
  dadosUsuario = new UserData();
  requestRdv: RdvRequestByPrimaryKey = new RdvRequestByPrimaryKey();
  clienteSelecionado = new Cliente();
  empresaSelecionada = new Empresa();
  clientes = [];
  empresas = [];

  tipoDagRatRelacionada = [
    { label: 'DAG', value: 'D' },
    { label: 'RAT', value: 'R' },
  ];

  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private rdvService: RdvService
  ) { }

  ngOnInit() {
    console.log(+this.route);
    this.codigoRdv = +this.route.snapshot.paramMap.get('codigoRdv');
    console.log('CadastroComponent:' + this.codigoRdv);

    // Protege caso não seja retornado o código
    if (this.codigoRdv) {
      this.getDadosRdv();
      console.log('CadastroComponent:' + this.dadosUsuario.nome);
    }
  }

  get diagnostic() { return JSON.stringify(this.rdv); }

  // Busca os dados do usuário autenticado
  getDadosRdv() {
    this.rdvService.getDadosUsuario().subscribe(data => {
      this.dadosUsuario = data;
      this.retornaRdvByPrimaryKey(this.codigoRdv);
    });
  }

  retornaRdvByPrimaryKey(codigoRdv: number) {
    this.requestRdv.nomeUsuarioLogado = this.dadosUsuario.nome;
    this.requestRdv.codigoEmpresa = 1;
    this.rdvService.getRdvByPrimaryKey(codigoRdv, this.requestRdv).subscribe(data => {
      this.rdv = data;
      console.log(this.rdv);
    });
  }

  pesquisaCliente(event: { query: any; }) {
    this.rdvService.pesquisarCliente(event.query)
      .then(data => this.clientes = data);
  }

  pesquisaEmpresa(event: { query: any; }) {
    this.empresas = [
      { codigoEmpresa: '1', nomeEmpresa: 'PRISMA INFORMATICA LTDA', },
      { codigoEmpresa: '4', nomeEmpresa: 'PRISMATEK EQUIPAMENTOS E SISTEMAS LTDA', }
    ];
  }

  clienteSelecionadoEvent(event) {
    // console.log(event);
    this.clienteSelecionado = event;
    this.rdv.nomeCliente = this.clienteSelecionado.nome;
    this.rdv.codigoCliente = this.clienteSelecionado.codigo;
  }

  empresaSelecionadaEvent(event) {
    // console.log(event);
    this.empresaSelecionada = event;
    this.rdv.codigoEmpresa = this.empresaSelecionada.codigoEmpresa;
    this.rdv.nomeEmpresa = this.empresaSelecionada.nomeEmpresa;
  }
}
