const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡";

// [abc] -> Conjunto [^] -> Negação
// [0-9]
// [min-maxQUALQUERCOISA] 
// [^min-maxQUALQUERCOISA] -> Tudo menos isso

const regexArray = [
    /[0-9ah]+/g,
    /[a-z]+/g,
    /[A-Z]+/g,
    /[^a-zA-Z0-9]+/g, // Negação
    /[\u00A0-\u00BA]+/g, // Unicode
    /\w+/g,
    /\W/g,
    /\d+/g,
    /\D+/g,
    /\s+/g,
    /\S+/g,
]

for (regex of regexArray){
    console.log(`${regex}:`, alphabet.match(regex))
}