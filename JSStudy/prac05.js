var Property=class{
    constructor(factor){
    this.name=factor;
    this.math=parseInt(Math.random()*100);
    this.coding=parseInt(Math.random()*100);
    }
    print(){
        console.log(`이름: ${this.name}, 수학점수: ${this.math} 점, 코딩점수: ${this.coding} 점`);
    }
    Avg(){return parseInt((this.math+this.coding)/2);}
};
var subjnames={
    math:'수학',
    coding:'코딩'
}
let test=[];
test.push(new Property('송대관'));
test.push(new Property('태진아'));
test.push(new Property('남진'));
function Avgmax(test){
    max=0;
    test.forEach((p) => {
        if(p.Avg()>max){
             max=p.Avg();
             s=p.name
        }
    });
    console.log(`평균의 최고점은 ${max} 점이고 ${s}이다.`)
}
function Avgmin(test){
    min=100;
    test.forEach((p) => {
        if(p.Avg()<min){
             min=p.Avg();
             s=p.name
        }
    });
    console.log(`평균의 최저점은 ${min} 점이고 ${s}이다.`)
}

//과목별로 최고점 최저점.누구.
function FindMax(subj){
    max=0;
    //참고: P.name// p["name"]
    test.forEach((t) => {
        if(t[subj]>max) {
            max=t[subj];
            s=t.name;
        }
    });
    console.log(`${subjnames[subj]}의 최고점은 ${max} 점이고 ${s}이다.`)
}
function FindMin(subj){
    min=100;
    //참고: P.name// p["name"]
    test.forEach((t) => {
        if(t[subj]<min) {
            min=t[subj];
            s=t.name;
        }  
    });
    console.log(`${subjnames[subj]}의 최저점은 ${min} 점이고 ${s}이다.`)
}

test.forEach((p) => {
    p.print()
});
Avgmax(test);
Avgmin(test);
FindMax('math');
FindMin('math');
FindMax('coding');
FindMin('coding')