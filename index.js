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
    weight = parseFloat(weight)
    var postal_type = req.body.type
    console.log('the weight you entered is '+weight)
    console.log('the weight you entered is '+postal_type)
    
    var result_function = calc(weight,postal_type);
    var param={result: result_function}
    res.render('/pages/result',param)
    res.end();
  })
  /*
  app.get('/calculate_price',(req,res)=>{
    var result_function = resultfinal
    var param={result: result_function}
    res.render('result',param)
    res.end()
  })*/
  
  function calc(weight,postal_type){
    var result="$$$ "
    //switch for the type
    switch (postal_type) {
      case "letterS":
        //switch for the weight
        switch (weight) {
          case weight<=1:
            result+="0.55"
            break;
          case weight<=2:
            result+="0.70"
            break;
          case weight<=3:
            result+="0.85"
            break; 
          default:
              result+="1.00"
            break;
        }
        break;
      case "letterM":
        //switch for the weight
        switch (weight) {
          case weight<=1:
            result+="0.50"
            break;
          case weight<=2:
            result+="0.65"
            break;
          case weight<=3:
            result+="0.80"
            break; 
          default:
              result+="0.95"
            break;
        }
        break;
      case "letterE":
        //switch for the weight
        switch (weight) {
          case weight<=1:
            result+="1.00"
            break;
          case weight<=2:
            result+="1.15"
            break;
          case weight<=3:
            result+="1.30"
            break;
          case weight<=4:
              result+="1.45"
              break;
          case weight<=5:
            result+="1.60"
            break;
          case weight<=6:
            result+="1.75"
            break; 
          case weight<=7:
            result+="1.90"
            break;
          case weight<=8:
            result+="2.05"
            break;
          case weight<=9:
            result+="2.20"
            break;
          case weight<=10:
            result+="2.35"
            break; 
          case weight<=11:
            result+="2.50"
            break;
          case weight<=12:
            result+="2.65"
            break;
          case weight<=13:
            result+="2.80"
            break;     
          default:
              result+="wasn't in the range"
            break;
        }
        break;
      
      default:
        result+="didn't enter any valid option"
        break;
    }
    return result;
  }