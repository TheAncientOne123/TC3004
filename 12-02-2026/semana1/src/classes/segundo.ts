const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
myArray.push(6);
console.log(myArray);
myArray.pop();
console.log(myArray);

const student ={
    id: 'A01234693',
    name: 'Hector',
    age: 21,
    direction:{
        city: 'Monterrey',
        state: 'Nuevo Leon',
        country: 'Mexico',
        pc: 64000
    }

}

console.log(student);
console.table(student);

const student2 = {...student};

console.log(student2);

student2.age = 42;
console.log(student2.age);

const myarray2 = [1,2,3,4,5];
myarray2.push(7);
let myarray3 = [...myarray2,5];

console.log(myarray2);
Array.prototype.map