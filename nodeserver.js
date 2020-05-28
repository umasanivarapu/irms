const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

router.get('/',function(req,res){
  res.render('base');
  //__dirname : It will resolve to your project folder.
});

app.post('/userloggedin', function(req, res){
	console.log('email: ' + JSON.stringify(req.body.email));
	console.log('Password: ' + req.body.password);
	var name = JSON.stringify(req.body.email);
	name = name.replace(/['"]+/g, '');
	res.render('userhome',{name:"Welcome " + name });
});

app.get('/userlogin', function(req, res){
	res.render('userlogin');
});
app.get('/usersignup', function(req, res){
	res.render('usersignup');
});
app.get('/ownerlogin', function(req, res){
	res.render('ownerlogin');
});
app.get('/ownersignup', function(req, res){
	res.render('ownersignup');
});
app.get('/adminlogin', function(req, res){
	res.render('adminlogin');
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