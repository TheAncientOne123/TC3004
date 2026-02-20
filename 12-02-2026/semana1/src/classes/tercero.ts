function greetings(name: string){
    return `Hello, ${name}`;

}

const greetingsArrow = (name: string): string => {
    return `Hello, ${name}`;
};

const msg = greetings('Hector');
console.log(msg);
const msg2 = greetingsArrow('HectorSanchez');
console.log(msg2);

const greetings3 =(name: string) => `Hello, ${name}`;
const msg3 = greetings3('HectorSanchez');
console.log(msg3);