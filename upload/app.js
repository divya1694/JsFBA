var express=require('express');
var bodyParser=require('body-parser');
<<<<<<< HEAD
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });


console.log('express');
=======
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })

var sbml=require('libsbml');


>>>>>>> 1b927258d278c21487bd57e0f475bc7a555d4e35
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


<<<<<<< HEAD
app.listen(3000);
=======
app.listen(3000);
>>>>>>> 1b927258d278c21487bd57e0f475bc7a555d4e35
