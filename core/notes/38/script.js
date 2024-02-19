// superClass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log('Saldo insuficiente.')
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag./C: ${this.agencia}/${this.conta} | Saldo: ${this.saldo}`)
};

const conta1 = new Conta(11, 22, 10);

conta1.depositar(33);
conta1.sacar(11);
conta1.sacar(34);

// ===================================================

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype= Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente.');
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo()
};

const contaCorrente1 = new ContaCorrente(11, 33, 0, 100);

contaCorrente1.depositar(10);
contaCorrente1.sacar(110);