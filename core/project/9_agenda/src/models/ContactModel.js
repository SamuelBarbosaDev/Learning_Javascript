const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: {type: String, required:true},
    last_name: {type: String, required:false, default: ''},
    phone: {type: String, required:false, default: ''},
    email: {type: String, required:false, default: ''},
    criadoEm: {type: Date, default: Date.now},
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    async create(){
        this.valida();
        if(this.errors.length > 0) return;
        this.contact = await ContactModel.create(this.body);
    }

    async update(id){
        if(typeof id !== 'string') return;
        this.valida();
        if(this.errors.length > 0) return;
        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {new: true})
    }

    valida(){
        this.cleanUp();
        if(this.body.email && !validator.isEmail(this.body.email)){
            this.errors.push('E-mail inválido');
        }
        if(!this.body.name) this.errors.push('É obrigatório o preenchimento do campo `Nome`.');
        if(!this.body.email && !this.body.phone){
            this.body.errors.push('É obrigatório o preenchimento de ao menos um dos campos `Telefone` ou `E-mail`.')
        }
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            last_name: this.body.last_name,
            phone: this.body.phone,
            email: this.body.email,
        }
    }

    static async buscandoPorId(id){
        if(typeof id !== 'string') return;
        const contact = await ContactModel.findById(id);
        return contact;
    }

    static async buscaContatos(){
        const contact = await ContactModel.find().sort({criadoEm: -1})
        return contact;
    }

    static async delete(id){
        if(typeof id !== 'string') return;
        const contact = await ContactModel.findOneAndDelete({_id: id});
        return contact;
    }
}

module.exports = Contact;