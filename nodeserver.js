const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();




router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/base.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(__dirname + '/html'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/css'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/js'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/Images'));

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
console.log(__dirname);