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

exports.update = async (request, response) => {
    if(!request.params.id) return response('404');
    const classContact = new Contact(request.body);
    const contact = await classContact.buscandoPorId(request.params.id);
    if(!contact) return response.render('404');

    response.render('contact', { contact })
}