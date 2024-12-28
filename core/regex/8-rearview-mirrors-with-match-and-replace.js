const html = `
<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>
`;

// $1 $2 $3 <- Retrovisores \1

const regexHTML = /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g;

console.log(html.replace(regexHTML, `$1 PONK $3 PONK $4`));
