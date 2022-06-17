import { FieldGeneric  } from './field-generic';

export interface ConfigParams {
  pagina: number;
  //pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: FieldGeneric ;
}
