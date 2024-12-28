const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>';

console.log(html.match(/<.+>.+<\/.+>/g)) // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy
