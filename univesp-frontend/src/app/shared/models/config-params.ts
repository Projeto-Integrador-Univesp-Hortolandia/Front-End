import { FieldGeneric  } from './field-generic';

export interface ConfigParams {
  pagina: number;
  limite?: number;
  pesquisa?: string;
  campo?: FieldGeneric ;
}
