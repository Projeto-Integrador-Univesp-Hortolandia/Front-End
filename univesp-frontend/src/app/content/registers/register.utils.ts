

export const comparePassword = (password: string, confPassword: string): { status: string, valid: boolean } => {

    if (password || confPassword){

        if (password.length < 4 || confPassword.length < 4){
            return { status: 'A senha precisa ter mais de 4 caracteres', valid: false }
        }
    
        if (confPassword != password){
            return { status: 'As senhas não coincidem', valid: false }
        }    
    }

    return { status: '', valid: true }
}