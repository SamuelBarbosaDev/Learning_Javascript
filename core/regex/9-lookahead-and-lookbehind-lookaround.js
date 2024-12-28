const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

const regexArray = [
  /.+[^in]active$/gim,

  // Positive lookahead (frases que tem active)
  /.+(?=[^in]active)/gim,

  // Positive lookahead (frases que tem inactive)
  /.+(?=\s+inactive)/gim,

  // Negative lookahead (frases que NÃO tem active)
  /^(?!.+[^in]active).+$/gim,

  // Negative lookahead (frases que NÃO tem active)
  /^(?!.+inactive).+$/gim,

  // Positive lookbehind (Frases que começam com ONLINE)
  /(?<=ONLINE\s+)\S+.*/gim,

  // Negative lookbehind (Frases que NÃO começam com ONLINE)
  /^.+(?<!ONLINE.+)$/gim,
];

for (regex of regexArray) {
  console.log(`${regex}:`, lookahead.match(regex), "\n");
}
