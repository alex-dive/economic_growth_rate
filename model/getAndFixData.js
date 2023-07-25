module.exports = function getAndFixData(fullData) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < fullData.length; i++) {//遍歷fullData
            var count = 0;
            for(var key in fullData[i]){
                count++;//計算每一筆json的欄位數量
                if(typeof fullData[i][key] != 'number'){//修正不完整的資料，p：表示初步估計數；r：表示修正數；f：表示預測數；…：表示數值不明或尚未產生資料；-：表示無數值；--：表示無意義數值
                    fullData[i][key] =                  //資料來源:https://data.gov.tw/dataset/130489
                    fullData[i][key].toString()
                                    .replace('p','')
                                    .replace('r','')
                                    .replace('f','')
                                    .replace('...','')
                                    .replace('-','')
                                    .replace('--','')
                                    .replace(',','');//去除數字中的逗號避免誤判為字串
                }
            };
            if(count!=10){//已知總欄位數量應為10，找出數量小於10的資料缺少的資料並將無數值的欄位補上0
                if(fullData[i].year == undefined)fullData[i].year = 0;
                if(fullData[i].economic_growth_rate == undefined)fullData[i].economic_growth_rate = 0;
                if(fullData[i].average_gross_national_income_per_capita_usd == undefined)fullData[i].average_gross_national_income_per_capita_usd = 0;
                if(fullData[i].savings_rate == undefined)fullData[i].savings_rate = 0;
                if(fullData[i].unemployment_rate_percent == undefined)fullData[i].unemployment_rate_percent = 0;
                if(fullData[i].monthly_minimum_wage_amount == undefined)fullData[i].monthly_minimum_wage_amount = 0;
                if(fullData[i].hourly_minimum_wage_amount == undefined)fullData[i].hourly_minimum_wage_amount = 0;
                if(fullData[i].average_monthly_wage_industry_and_services_twd == undefined)fullData[i].average_monthly_wage_industry_and_services_twd = 0;
                if(fullData[i].average_monthly_wage_manufacturing_twd == undefined)fullData[i].average_monthly_wage_manufacturing_twd = 0;
                if(fullData[i].average_monthly_working_hours_industry_and_services_hours == undefined)fullData[i].average_monthly_working_hours_industry_and_services_hours = 0;
            };  
        };
        resolve(fullData);
    });
}