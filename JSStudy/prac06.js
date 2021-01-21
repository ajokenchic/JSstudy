let string1=`대한민국`;
let string2=new String(`대,한,민,국`);
let string3=new String(`abracadabra`);

console.log(string1.length);
console.log(string2.length);
console.log(string1.charAt(0));//포지션 위치의 글자
console.log(string1.charCodeAt(0));//포지션 위치의 글자의 유니코드
console.log(string1.concat(`만세`));//str을 뒤에 붙여서 리턴
console.log(string1.indexOf(`민`,0));//str과 일치하는 위치 리턴
console.log(string1.replace(`대`,`태`))//일치하는 글자와 str을 교체.
console.log(string1.search(`민`));//str과 일치하는 위치 리턴
console.log(string1.slice(1,3));//숫자 시작점부터 끝점까지 글자 리턴.
console.log(string3.split('c',4));//앞의 기준으로 n개만큼 리턴.
console.log(string1.substr(0,2))//앞숫자부터 뒷숫자갯수만큼 글자를 리턴.
console.log(string1.substring(1,3))//앞숫자부터 뒷숫자앞까지 글자를 리턴.(보편)
console.log(string3.toLowerCase())
console.log(string3.toUpperCase())

