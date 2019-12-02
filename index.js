const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const app = express()

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  //for body parser
  app.use(bodyParser.urlencoded({extended: false}))
  //POST method
  app.post('/calculate_price',(req,res)=>{
    var weight = req.body.weight
    console.log('the weight you entered is '+weight)
    res.end()
  })