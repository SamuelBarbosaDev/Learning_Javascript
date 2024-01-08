const list_numbers = [69, 7, 333, 777];

for (let i in list_numbers){
    console.log(list_numbers[i])
};

// People:

const people = {
    name: 'Carlos',
    last_name: 'Silva',
    age: 25,
}

for (let key in people){
    console.log(`Keys: ${key}`)
    console.log(`Values: ${people[key]}`)
}