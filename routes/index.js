var express = require('express');
var router = express.Router();

const Controller = require('../controller');
const controller = new Controller

router.get('/', (req, res)=>{//get homepage
  res.render('index', {title: 'Economics Data'})
});
router.get('/fullData', controller.getFullData);//取得economic_growth_rate資料
router.get('/economicsData', controller.getEconomicsData);//取得economic_growth_rate和economic_growth_rate資料
router.get('/GNIData', controller.getGNIData);//取得average_gross_national_income_per_capita和savings_rate資料

module.exports = router;
