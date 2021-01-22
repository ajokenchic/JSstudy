const http=require('http');//http모듈에 있는  함수를 변수 http를 이용해서 사용
const fs=require('fs')//fs(file stream)모듈에 있는 함수를 변수fs를 이용해서 사용


const app=http.createServer((req,res)=>{//http모듈에 있는 서버생성함수.
    console.log(req.url+':'+req.method);//클라이언트 요청을 터미널에 출력.
    fs.readFile('./server1.html',null,(err,data)=>{
        res.write(data);
        res.end();
    })
})

app.listen(3000,()=>{
    console.log('waiting from Port 3000');
})