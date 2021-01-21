
function callTenTimes(callback){
    console.log(callback);
    if(callback){
        for(let i=0;i<10;i++) callback();
    }else{
        console.log('No callback')
    }
}
callTenTimes();
callTenTimes(()=>{console.log('안녕하세요.');});//함수를 변수로.
