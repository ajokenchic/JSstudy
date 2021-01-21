const{odd,even}=require(`./var.js`);//import 기능은 require라고 씀.
const checkNumber=require(`./func.js`);

function checkString(str){
    if(str.length%2) return odd;
    return even;
}

console.log(checkNumber(10));
console.log(checkString('helloworld!'))

console.log(__filename);