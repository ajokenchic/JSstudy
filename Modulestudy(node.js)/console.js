const str='abc';
const num=1;
const boolean=true;
const obj={
    outside:{
        intside:{
            key:'value',
        },
    },
};
console.time('total time');
console.log('Test 1');
console.log(str,num,boolean);
console.error('에러 발생');
console.table([{name:'Zero',birth:1994},{name:'hero',birth:1998}]);

console.dir(obj,{colors:false,depth:2});
console.dir(obj,{colors:true,depth:1});

console.time('시간측정');
for(let i=0;i<1000000;i++){}
console.timeEnd('시간측정');

function b(){console.trace('추적');}
function a(){b()}
a();
console.timeEnd('total time');