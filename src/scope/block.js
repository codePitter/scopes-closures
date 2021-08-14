const fruits = () => {
    if(true){
        var fruit1 = 'banana';
        var fruit2 = 'pera';
        var fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    
    }
    console.log(fruit1);
}

fruits();
//banana pera kiwi

var x = 1;
{
    var x = 2;
    console.log(x);
};
console.log(x);

//2
//2

const anotherFunction = () => {
    for(let i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
};

anotherFunction();

//0 1 2 3 4 5 6 7 8 9