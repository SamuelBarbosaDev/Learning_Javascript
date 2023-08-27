// ++:
let condition = 1;

console.log("++ :")

while (condition <= 5) {
    console.log("Contador: ", condition);
    condition++;
};

// --:
let condition_2 = 10

console.log("-- :")

while (condition_2 >= 1) {
    console.log("Contador: ", condition_2);
    condition_2--;
    if (condition_2 === 11){
        console.log(11);
        break;
    };
};