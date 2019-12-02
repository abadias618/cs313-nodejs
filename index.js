const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  //for body parser
  .use(bodyParser.urlencoded({extended: false}))
  //POST method
  .post('/calculate_price',(req,res)=>{
    var weight = req.body.weight;
    console.log('the weight you entered is '+weight);
    res.end();
  })