const Contact = require('../models/ContactModel');

exports.index = (request, response) => {
    response.render('contact', {contact: {}});
}

exports.create = async (request, response) => {
    try{
        const contact = new Contact(request.body);
        await contact.create();

        if(contact.errors.length > 0){
            request.flash('errors', contact.errors);
            request.session.save(() => response.redirect('/contact'))
            return;
        }

        request.flash('success', 'Contato registrado com sucesso.');
        request.session.save(() => response.redirect(`/contact/${contact.contact._id}`));
        return;
    }
    catch(e){
        console.log(e);
        return response.render('404');
    }
}

exports.edit = async (request, response) => {
    if(!request.params.id) return response('404');
    const contact = await Contact.buscandoPorId(request.params.id);
    if(!contact) return response.render('404');

    response.render('contact', { contact })
}

exports.update = async (request, response) => {
    try{
        if(!request.params.id) return response.render('404');
        const contact = new Contact(request.body);
        await contact.update(request.params.id);
        if(contact.errors.length > 0){
            request.flash('errors', contact.errors);
            request.session.save(() => response.redirect('/contact'));
            return;
        }
        request.flash('success', 'Contato atualizado.');
        request.session.save(() => response.redirect(`/contact/${contact.contact._id}`));
    }
    catch(e){
        console.log(e);
        response.render('404')
    }
}

exports.readAll = async (request, response) => {
    try{
        const contact = await Contact.buscaContatos();
        response.render('index', { contact })
    }
    catch(e){
        console.log(e);
        response.render('404');
    }
}

exports.delete = async (request, response) => {
    try{
        if(!request.params.id) return response.render('404')
        const contact = await Contact.delete(request.params.id);
        if(!contact) return response.render('404');

        request.flash('success', 'Contato excluído.')
        request.session.save(() => response.redirect('/'))
    }
    catch(e){
        console.log(e);
        response.render('404');
    }
}