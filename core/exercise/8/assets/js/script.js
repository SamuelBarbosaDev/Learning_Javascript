const content_principal = document.querySelector('.content-principal');
const selector_tags = content_principal.querySelectorAll('p');
const style_body =  getComputedStyle(document.body);
const background_color_body = style_body.backgroundColor;

console.log(background_color_body)
for (let tag of selector_tags){
    tag.style.color = '#fff'
    tag.style.backgroundColor = background_color_body
}