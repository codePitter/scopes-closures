const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);

myCount();//1
myCount();//2
myCount();//3

const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        count++;
        console.log(count);    }
    return displayCount;
};
const myCount = buildCount(1);

myCount();//2
myCount();//3
myCount();//4



console.log(count++);
count++;
console.log(count);
console.log(++count);