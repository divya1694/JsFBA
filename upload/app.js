var express=require('express');
var bodyParser=require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });


console.log('express');
var app=express();

var data=[{item:'get milk'},{item:'walk dog'},{item:'kick'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/',function (req, res) {
    
	res.sendFile(__dirname +'/index.html');
   
});



app.post('/upload', upload.single('myimage'),  function (req, res, next) {
    console.log('divya');
	console.log(req.file);
   
});


app.listen(3000);
