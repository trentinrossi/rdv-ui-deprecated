export class Cliente {
  codigo: number;
  nome: string;
  cnpj: string;
  cidade: string;
}

export class Empresa {
  codigoEmpresa: number;
  nomeEmpresa: string;
}

export class Rdv {
  codigoEmpresa: number;
  nomeEmpresa: string;
  codigoCliente: number;
  nomeCliente: string;
  codigoConsultor: number;
  nomeConsultor: string;
  codigoRdv: number;
  tipoDatRatRelacionada: string;
  codigoDagRatRelacionada: number;
  cnpjCliente: string;
  cidadeCliente: string;
  dataInicioViagem: string;
  dataFinalViagem: string;
  objetivoRdv: string;
  totalQuilometrosPercoridos: number;
  reembolsarQuilometragem: string;
  faturarQuilometragem: string;
  dataCadastroRdv: Date;
  horaCadastroRdv: string;
  situacaoRdv: number;
  codigoRatAssistenciaTecnica: number;
  nomeTabelaParametros: string;
  nomeItinerario: string;
  nomeTabelaPrecoQuilometragem: string;
  faturamentoCodigoPedido: number;
  faturamentoSerieNota: string;
  faturamentoNumeroNota: number;
  faturamentoValorQuilometro: number;
  faturamentoDataEmissaoNota: string;
  reembolsoNumeroTitulo: string;
  reembolsoTipoTitulo: string;
  reembolsoCodigoFornecedor: number;
  reembolsoValorQuilometro: number;
}

export class RdvRequestBody {
  nomeUsuarioLogado: string;
  codigoCliente: number;
  codigoProjeto: number;
}

export class RdvRequestByPrimaryKey {
  nomeUsuarioLogado: string;
  codigoEmpresa: number;
}
