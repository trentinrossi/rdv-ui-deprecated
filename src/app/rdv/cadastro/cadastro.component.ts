import { Rdv } from './../../core/model';
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

  tipoDatRatRelacionada = [
    { label: 'DAG', value: 'D' },
    { label: 'RAT', value: 'R' },
  ];

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rdvService: RdvService
  ) { }

  ngOnInit() {
    console.log(+this.route);
    this.codigoRdv = +this.route.snapshot.paramMap.get('codigoRdv');

    console.log(this.codigoRdv);

    // Protege caso não seja retornado o código
    if (this.codigoRdv) {
      this.rdvService.getRdvByPromise(this.codigoRdv)
        .then(rdv => {
          this.rdv = rdv;
          console.log('RDV:' + this.rdv);
        });
      // .catch(erro => this.errorHandler.handle(erro));
    }

    // this.configurarFormulario();
  }

  /*
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigoEmpresa: [],
      codigoCliente: [],
      codigoRdv: [null, Validators.required],
      tipoDatRatRelacionada: ['DAG', Validators.required],
    });
  }*/

}
