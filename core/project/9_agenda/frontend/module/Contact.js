export default class Contact{
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
            e.preventDefault();
            this.erro = false;
            const name = e.target.querySelector('input[name="name"]');
            const phone = e.target.querySelector('input[name="phone"]');
            const email = e.target.querySelector('input[name="email"]');
            const subtitle = document.getElementsByClassName('subtitle')[0];
            document.querySelectorAll('.alert').forEach(e => e.remove());

            if(!name.value){
                subtitle.after(
                    this.criaAlert(
                        'É obrigatório o preenchimento do campo "<strong>Nome</strong>".',
                        'alert'
                    )
                )
                this.erro = true;
            }

            if(!phone.value && !email.value){
                subtitle.after(
                    this.criaAlert(
                        'É obrigatório o preenchimento de ao menos um dos campos "<strong>Telefone</strong>" ou "<strong>E-mail</strong>".',
                        'alert'
                    )
                )
                this.erro = true;
            }
            if(this.erro) return;
            e.target.submit();
        })
    }

    criaAlert(content, className){
        const tagP = document.createElement('p');
        tagP.className = className;
        tagP.innerHTML += content;
        return tagP;
    }
}