const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed amet maiores ipsum consequuntur dolor atque debitis, fugiat aspernatur omnis eaque molestiae quaerat nam repudiandae eveniet facere deleniti nobis tempore.
`;

const files = [
    'Blade Runner.jpeg',
    'Taxi Driver.jpg',
    'The Godfather.JPEG',
    'Inglourious Basterds.mkv',
    'Demolidor.JPeeEEeeG',
    'goodfellas.JPG'
]

const cpfs = `
CPFs:
  254.224.877-45 215.978.456-12 047.258.369-96 


  963.987.321-00

  963.987.32a.00 (invalid)
  963.987.32-00 (invalid)
`;

const ips = `

IPs:
   0.0.0.0

   192.168.0.25

        10.10.5.12

        10.01.10.20 (invalid)
        10.021.08.20 (invalid)

   255.255.255.255

`;

module.exports = {
    text,
    files,
    cpfs,
    ips
}