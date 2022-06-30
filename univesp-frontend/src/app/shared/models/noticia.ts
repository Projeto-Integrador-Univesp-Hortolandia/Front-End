export interface Noticia {
  id?: number;
  nome: string;

  urlFoto: string;
  dtLancamento: Date;
  descricao?: string;
  //nota: number;
  //urlIMDb?: string;
  //genero: string;
}
/*
"id": 1,
      "nomeApelido": "Professora Nayara",
      "fotoPerfil":"univesp-frontend/src/assets/images/prof_1.png",
      "dataPostagem": "1997-07-11T03:00:00.000Z",
      "mensagem": "Chegada ao Parque Ecológico Monsenhor Emílio José Salim.",
      "fotoPostagem":"univesp-frontend/src/assets/images/turma_1.png",
      "avisoPostagem":""
*/
