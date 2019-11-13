import { Cliente, Rdv, RdvRequestBody, RdvRequestByPrimaryKey } from './../core/model';
import { RdvHttp } from './rdv-http';
import { environment } from './../../environments/environment.prod';
import { service, user } from '@seniorsistemas/senior-platform-data';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable, forkJoin, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  rdvUrl: string;

  constructor(private http: RdvHttp) {
    this.rdvUrl = `${environment.apiUrl}`;
  }

  /**
   * Chamadas para o cliente
   */
  // Pesquisa o cliente
  pesquisarCliente(like: any): Promise<any> {
    return this.http.get<any>(`${this.rdvUrl}/clientes/${like}`)
      .toPromise()
      .then(response => response);
  }

  // Retorna conforme o código
  getCliente(codigo: number): Observable<Cliente> {
    const url = `${this.rdvUrl}/clientes/${codigo}`;
    return this.http.get<Cliente>(url);
  }

  /**
   * Chamadas para o RDV
   */
  // Retorna todos os RDV's
  getTodosRdvs(usuarioLogado: RdvRequestBody): Observable<any> {
    return this.http.post<any>(`${this.rdvUrl}/rdv`, usuarioLogado, httpOptions);
  }

  // Retorna o RDV pela chave primária
  getRdvByPrimaryKey(codigoRdv: number, parameters: RdvRequestByPrimaryKey): Observable<any> {
    return this.http.post<any>(`${this.rdvUrl}/rdv/${codigoRdv}`, parameters, httpOptions);
  }

  /**
   * Chamadas para plataforma
   */
  getDadosUsuario(): Observable<any> {
    return forkJoin(
      from(service.getRestUrl()),
      from(user.getAuthHeader()),
    ).pipe(mergeMap((values: any) => {
      const [restUrl, authHeader] = values;
      const headers = new HttpHeaders({
        Authorization: authHeader
      });
      return this.http.get<any>(`${restUrl}usuarios/userManager/queries/obterMeusDados`, { headers });
    }));
  }
}
