const { cpfs, ips } = require("./database");

// ^ -> Começa com
// $ -> Termina com

const regexIPs = ips.match(
    /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g
)

const regexCPFs = cpfs.match(
    /(\d{3}\.){2}\d{3}-\d{2}/g
)

console.log(
    'IPs:', regexIPs,
    '\n',
    'CPFs:', regexCPFs,
)