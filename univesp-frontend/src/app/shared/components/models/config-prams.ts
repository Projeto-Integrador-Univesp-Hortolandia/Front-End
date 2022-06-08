import { FieldGeneric  } from './field-generic';

export interface ConfigPrams {
  pagina: number;
  //pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: FieldGeneric ;
}
