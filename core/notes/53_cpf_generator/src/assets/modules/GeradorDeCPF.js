import ValidaCPF from './ValidaCPF.js'

export default class GeradorDeCPF{
    númerosRandômicos(min=100000000, max=999999999){
        return String(Math.floor(Math.random()*(max - min) + min));
    };

    padronizaCPF(){
        const cpf = this.geraCPF();
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    geraCPF(){
        const cpf = this.númerosRandômicos();
        const dígito_1 = ValidaCPF.geraDigito(cpf);
        const dígito_2 = ValidaCPF.geraDigito(cpf + dígito_1);
        return cpf + dígito_1 + dígito_2
    };
};