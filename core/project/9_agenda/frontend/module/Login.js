import validator from 'validator'

export default class Login{
    constructor(form){
        this.form = document.getElementsByClassName(form)[0];
        this.erro = false;
    }

    init(){
        if(!this.form) return;
        this.validar();
    }

    validar(){
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.erro = false;
            const email = e.target.querySelector('input[name="email"]');
            const password = e.target.querySelector('input[name="password"]');
            const subtitle = document.getElementsByClassName('subtitle')[0];
            document.querySelectorAll('.alert').forEach(e => e.remove())

            if(password.value.length < 3 || password.value.length > 50){
                subtitle.after(
                    this.criaAlerta(
                        'A Senha precisa ter entre 3 e 50 caracteres.',
                        'alert'
                    )
                );
                this.erro = true;
            }
            if(!validator.isEmail(email.value)){
                subtitle.after(
                    this.criaAlerta(
                        'E-mail Inválido.',
                        'alert'
                    )
                );
                this.erro = true;
            }

            if(this.erro) return;
            e.target.submit();
        });
    }

    criaAlerta(content, class_value){
        const tagP = document.createElement('p');
        tagP.className = class_value;
        tagP.textContent = content;
        return tagP;
    }
}