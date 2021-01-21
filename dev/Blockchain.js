const SHA256=require('./SHA256');
function Blockchain(){
    this.chain=[];//채굴한 블록을 저장하는 배열
    this.newTransactions=[];//블록에 저장되지 않은 모든 트랜젝션을 저장하는 배열.
}

Blockchain.prototype.createNewBlock=function(nonce,prevBlockHash,hash){
    const newBlock={
        //Blockchain 안의 새로운 블록으로 관련 데이터들은 모두 이 안에 저장.
        index:this.chain.length+1,//새로운 블록이 몇번째 블록인지.
        timestamp:Date.now(),//블록이 생성된 시점.
        transactions: this.newTransactions,//새로운 트랜섹션과 미결 트랜섹션이 추가
        nonce:nonce,//POW를 통해 찾아진 숫자값
        hash:SHA256(hash),//트랜섹션의 해시값
        prevBlockHash:prevBlockHash,//이전 블록에서 직전 블록까지 트랜섹션의 해시값
    }
    this.newTransactions=[];//새로운 블록의 만들 때 새로운 트랜섹션을 저장할 배열을 초기화.
    this.chain.push(newBlock);//새로운 블록을 체인에 추가.
    return newBlock;//새로운 블록을 반환.
}
Blockchain.prototype.getLastBlock=function(){
    return this.chain[this.chain.length-1];
}
Blockchain.prototype.createNewTransaction=function(amount,sender,recipient){
    const newTransaction={
        amount:amount,
        sender:sender,
        recipient:recipient,
    };
    this.newTransactions.push(this.newTransaction);
    return this.getLastBlock()['index']+1;
}
module.exports=Blockchain;//Blockchain 생성자 함수를 exports하기 위해 dev/blockchain.js 파일 제일 하단에 추가.