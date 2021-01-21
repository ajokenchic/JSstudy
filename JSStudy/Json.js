//배열 선언
const jsObj=[{
    name:'홍길동',
    region:'서울'
},{
    name:'김철수',
    region:'부산'
}];
//JSON.stringfy()메소드로 자바스크립트 객체를 JSON문자열로 변경합니다.
const outputA=JSON.stringify(jsObj);
const outputB=JSON.stringify(jsObj,null,2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log('------------------------');
//JSON.parse()메소드로 JSON문자열을 자바스크립트 객체로 변경합니다.
const outputC=JSON.parse(outputB);
console.log(typeof(outputC));
console.log(outputC);