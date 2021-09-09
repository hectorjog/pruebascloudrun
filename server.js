var express = require('express');
var app = express();
app.use(express.static('dist/angular-for-python-backend'));
app.get('/', function (req, res,next) {
res.redirect('/'); 
});
app.listen(4200)
