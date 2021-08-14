const scope = 'I am global';

const func = () => {
    const scope = 'i am local scope'
    return scope;
};

console.log(func());
console.log(scope);