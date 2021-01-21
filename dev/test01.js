const Blockchain=require('./Blockchain');//Blockchain.js를 사용하기 위해 import(=require)
const bitcoin=new Blockchain();//Blockchain 생성자의 인스턴스 생성.
idx=0;
while(idx!=4){
    bitcoin.createNewBlock(parseInt(Math.random()*10000),'ABRACADABRA2','1234567890B');
    console.log(bitcoin);//터미널에서 확인.
    idx++;
}
bitcoin.createNewBlock(1233,'ABRACADABRA3','1234567890C');
bitcoin.createNewBlock(1234,'ABRACADABRA1','1234567890A');


console.log(bitcoin);//터미널에서 확인.