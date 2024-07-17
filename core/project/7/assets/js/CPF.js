class CPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.limpandoCPF()
        this.validadoCPF()
    }

    limpandoCPF(){
        this.cpf = this.cpf.replace(/[^a-zA-Z0-9]/g, '')
    }

    validadoCPF(){
        if (this.cpf.length != 11){
            console.log(`O CPF ${this.cpf} é invalido.`)
        }
        else {
            let cpf = this.cpf.slice(0, 9);

            for (let i=10; i<=11; i++){
                cpf = cpf + this.calculadoDigito(cpf, i);
            };
    
            if (cpf === this.cpf) console.log(`O CPF ${this.cpf} é Válido.`);
            else console.log(`O CPF ${this.cpf} é invalido.`);
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

        return digito
    }
};

const Vcpf = new CPF('111.222.333-96');