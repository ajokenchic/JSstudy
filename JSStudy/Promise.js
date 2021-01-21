function run3(){
    console.log("3초 후 실행");
}
function run4(){
    console.log("4초 후 실행");
}
function run5(){
    console.log("5초 후 실행");
}
console.log('시작');
setTimeout(run3,3000);
setTimeout(run4,4000);
setTimeout(run5,5000);


console.log('끝')