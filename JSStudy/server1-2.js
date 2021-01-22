const http=require('http');
const app=http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>hello node</h1>');
	res.end('<p>Hello Server!</p>');
});
app.listen(3000, () => { console.log ('3000번 포트에서 접속 대기 중 입니다.'); });

const app2=http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>hello node2</h1>');
	res.end('<p>Hello Server2!</p>');
});
app2.listen(3001, () => { console.log ('3001번 포트에서 접속 대기 중 입니다.'); });
