function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
};

function testCallBack(name, callback) {
    setTimeout(
        () => {
            console.log(name)
            if (callback) callback()
        },
        rand()
    );
};

// Forma 1
// testCallBack('f1');
// testCallBack('f2');
// testCallBack('f3');

// Forma 2
testCallBack(
    'f1',
    () =>  testCallBack(
        'f2',
        () => testCallBack(
            'f3'
        )
    )
)