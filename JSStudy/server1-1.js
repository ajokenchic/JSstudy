const http=require('http');
const app=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>hello node</h1>');
    res.end('<p>Hello Server!</p>');
})
app.listen(3000);
app.on('listening',()=>{
    console.log('waiting from Port3000');
})
app.on('error',(error)=>{
    console.error(error);
})