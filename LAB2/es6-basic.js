var str = "Hello World !!!";
console.log(str);

var number = 10;
{
    let number = 22;
    console.log(numbber);
}
console.log(number);

{
    const number = 10;
//    number = 15;
}

function add(a,b) {
    let c = a + b;
    return c;
}
let result = add(5, 3);
console.log(result);

const addFn = (a, b) => a + b;
result = addFn(10, 15);
console.log(result);