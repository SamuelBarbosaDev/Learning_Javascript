const tagForm = document.querySelector('form[name="frm_cpf"]');

function mensagemDeErro(campo, mensagem){
    const tagP = document.createElement('p');
    tagP.classList.add('alert');
    tagP.innerText = mensagem;
    campo.after(tagP);
};

function removeMensagensDeErro(){
    const classAlert = document.querySelectorAll('.alert');

    for(i of classAlert){
        i.remove();
    };
};

function validaCamposEmBranco(){
    const classValid = document.getElementsByClassName('valid');
    let valid = true;

    for(i of classValid){
        if(!i.value){
            mensagemDeErro(i, `O campo "${i.previousElementSibling.innerText}" não pode estar vazio.`);
            valid = false
        };
    };

    return valid
};

function validaCampoCPF(campoCPF){
    const cpf = new CPF(campoCPF.value);
    let valid = true;

    if(!cpf.validadoCPF()){
        mensagemDeErro(campoCPF, `CPF "${campoCPF.value}" Inválido.`);
        valid = false;
        
    };

    return valid
}

function validaCampoUser(campoUser){
    let valid = true;

    if(campoUser.value.length < 3 || campoUser.value.length > 12){
        mensagemDeErro(campoUser, 'Quantidade De Dígitos Inválido.');
        valid = false;
    };

    if(!user.value.match(/^[a-zA-Z0-9]+$/g)){
        mensagemDeErro(campoUser, 'O nome de usuário deve conter somente letras e números.');
        valid = false;
    };

    return valid
};

function validaCampoPassword(campoPassword, campoRePassword){
    let valid = true;

    if(campoPassword.value !== campoRePassword.value){
        mensagemDeErro(rePassword, 'A senha está diferente.');
        valid = false;
    };

    if(campoPassword.value.length < 6 || campoPassword.value.length > 12){
        mensagemDeErro(password, 'Senha precisa ter entre 6 e 12 caracteres');
        valid = false;
    };

    return valid
};

tagForm.addEventListener('submit', e => {
    e.preventDefault();
    const cpf = e.target.cpf;
    const user = e.target.user;
    const password = e.target.password;
    const rePassword = e.target.repassword;

    removeMensagensDeErro();

    if(
        validaCamposEmBranco() && 
        validaCampoCPF(cpf) && 
        validaCampoUser(user) && 
        validaCampoPassword(password, rePassword)
    ){
        alert('Formulário Enviado.')
        e.target.submit()
    }
});

class CPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.limpandoCPF();
        this.validadoCPF();
    };

    limpandoCPF(){
        this.cpf = this.cpf.replace(/[^a-zA-Z0-9]/g, '');
    };

    validadoCPF(){
        if (this.cpf.length != 11){
            return false
        }
        else {
            let cpf = this.cpf.slice(0, 9);

            for (let i=10; i<=11; i++){
                cpf = cpf + this.calculadoDigito(cpf, i);
            };
    
            if (cpf === this.cpf) return true;
            else return false;
        }
    }

    calculadoDigito(cpf, comprimentoDoCPF=10){
        let digito = 0;

        for (let i of cpf){
            digito += parseInt(i) * comprimentoDoCPF;
            comprimentoDoCPF--;
        };

        if (digito < 2) digito = 0;
        else digito = 11 - parseInt(digito%11);

        return digito;
    }
};
