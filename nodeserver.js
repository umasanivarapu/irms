const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/base.html'));
  //__dirname : It will resolve to your project folder.
});
app.post('/userlogin', function(req, res){
	console.log('email: ' + req.body.email);
	console.log('Password: ' + req.body.password);
	 res.sendFile(path.join(__dirname+'/html/userhome.html'));
});
//add the router
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/Images'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',router)
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
console.log(__dirname);