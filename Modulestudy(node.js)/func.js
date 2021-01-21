const{odd,even}=require(`./var`);

function checkNumber(num){
    if(num%2) return odd;
    return even;
}

module.exports=checkNumber;//외부로 내보내는 건 exports <- export아님.