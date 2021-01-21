const timeout=setTimeout(()=>{
    console.log('execute after 1.5 sec');
},1500)

const interval=setInterval(() => {
   console.log('execute every 1 sec'); 
}, 1000);

const timeout2=setTimeout(() => {
   console.log('do not execute') 
}, 3000);

setTimeout(() => {
   clearTimeout(timeout2);
   clearInterval(interval); 
}, 3500);

const immediate=setImmediate(()=>{
    console.log('execute immediately');
})

const immediate2=setImmediate(()=>{
    console.log('do not execute');
})

clearImmediate(immediate2);