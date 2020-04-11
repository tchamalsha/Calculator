fetch('http://data.fixer.io/api/latest?access_key=f8aa6a52bab1e9f2a3bef0c8996ce834&format=1').then(function(responce){
    return responce.json();


}).then(function(obj){
    //console.log(obj);
    var textData=JSON.stringify(obj);
    var data=JSON.parse(textData);
    console.log(data);
    var date=data.date;
  document.getElementById("date").innerHTML="Last Updated: "+date;
  var d1=parseFloat(data.rates.LKR)
   var d2=parseFloat(data.rates.USD)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td1").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.AUD)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td2").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.INR)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td3").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.KWD)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td4").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.GBP)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td5").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.JPY)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td6").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.RUB)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td7").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.CNY)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td8").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.KRW)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td9").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.EUR)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td10").innerHTML="RS. "+d3;

   var d2=parseFloat(data.rates.CAD)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td11").innerHTML="RS. "+d3;

   var d2=parseFloat(data.rates.HKD)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td12").innerHTML="RS. "+d3;
   var d2=parseFloat(data.rates.SAR)
   var d3=(d1/d2).toFixed(2);
   document.getElementById("td13").innerHTML="RS. "+d3;
  
   



}).catch(function (error){
    console.error('Something went wrong!!');
    console.error(error);
});
//document.getElementById("td1").innerHTML=d1;