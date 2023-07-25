const fullData = require('./full.json');
const getAndFixData = require('./model/getAndFixData');

module.exports = class Member {
    //取得full.json資料並將無數值的欄位補上0
    getFullData(req, res){
        getAndFixData(fullData).then(fixedData=>{//將無數值的欄位補上0
            //成功 
            res.render('fullData', {
                fullData: fixedData
            });
        }, (err)=>{
            // 錯誤
            console.log(err);
        })
    }

    //取得economic_growth_rate和unemployment_rate_percent資料
    getEconomicsData(req, res){
        getAndFixData(fullData).then(fixedData=>{//將無數值的欄位補上0
            // 成功
            var EconomicsData = [];
            for (let i = 0; i < fixedData.length; i++) {//擷取要回傳的欄位
                let data = {
                    year: fixedData[i].year,
                    economic_growth_rate: fixedData[i].economic_growth_rate,
                    unemployment_rate: fixedData[i].unemployment_rate_percent
                };
                EconomicsData[i] = data;
            }
            res.json(EconomicsData);
        }, (err)=>{
            // 錯誤
            console.log(err);
        })
    }

    //取得average_gross_national_income_per_capita和savings_rate資料
    getGNIData(req, res){
        getAndFixData(fullData).then(fixedData=>{//將無數值的欄位補上0
            // 成功
            var GNIData = []
            for (let i = 0; i < fixedData.length; i++) {//擷取要回傳的欄位
                let data = {
                    year: fixedData[i].year,
                    GNI: fixedData[i].average_gross_national_income_per_capita_usd, 
                    savings_rate: fixedData[i].savings_rate
                }
                GNIData[i] = data;
            }
            res.json(GNIData)
        }, (err)=>{
            // 錯誤
            console.log(err)
        })
    }
}
