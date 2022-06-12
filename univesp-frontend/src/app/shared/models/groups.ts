export interface Groups {
    id: number,
    Nome: string,
    Turma: string,
    Periodo: string,
    Ano: string,
    Sala: string
}

export interface Teachers{
    id: number,
    Nome: string,
    Email: string,
    Senha: string,
    CPF: string,
    DataNasc: string,
    NumRegistro: string,
    Group: number
}

export interface Students{
    id: number,
    Nome: string,
    CPF: string,
    DataNasc: string,
    Observacao: string,
    Group: number
}

export interface Responsibles{
    id: number,
    Nome: string,
    CPF: string,
    DataNasc: string,
    Observacao: string,
    Filhos: Childrens
}

interface Childrens{
    id: number
}