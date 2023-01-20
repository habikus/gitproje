const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
var bodyparser=require('body-parser')

const port = process.env.PORT || 5500; 

var path = require('path');

app.use(require('body-parser').urlencoded({ extended: true}));
app.use(require('body-parser').json());
app.use(express.json()) 

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts); 

app.set('view engine', 'ejs');
app.set('views', './views');  
 

var yol = "/gitproje"; 


app.get(yol ,function(req,res){  
    res.render('./index')
})
 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})