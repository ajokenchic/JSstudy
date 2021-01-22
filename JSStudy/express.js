const express=require('express');	// express 모듈 import
const app=express();				// app에 express()를 할당

app.get('/', (req, res) => {
    res.json({ note: `This is a JSON for ${req.method} Method`});
    res.sendFile(__dirname+"/server1.html");
    console.log(res);
});
app.post('/', (req, res) => {
	res.json({ note: `This is a JSON for ${req.method} Method`});
});
app.post('/firstendpoint', (req, res) => {
	res.json({ note: `This is a JSON for ${req.method} Method of firstendpoint`});
});

app.listen(3000, () => {	 console.log('standby port : 3000'); });
