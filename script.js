function fn1(){
 fetch('http://data.fixer.io/api/latest?access_key=f8aa6a52bab1e9f2a3bef0c8996ce834&format=1').then(function(responce){
    return responce.json();


}).then(function(obj){
    //console.log(obj);
    var textData=JSON.stringify(obj);
    var data=JSON.parse(textData);
    console.log(data);
    var d0=parseFloat(data.rates.LKR).toFixed(2);
    var d1=parseFloat(data.rates.USD).toFixed(2);
    var d2=parseFloat(data.rates.AUD).toFixed(2);
    var d3=parseFloat(data.rates.INR).toFixed(2);
    var d4=parseFloat(data.rates.KWD).toFixed(2);
    var d5=parseFloat(data.rates.GBP).toFixed(2);
    var d6=parseFloat(data.rates.JPY).toFixed(2);
    var d7=parseFloat(data.rates.RUB).toFixed(2);
    var d8=parseFloat(data.rates.CNY).toFixed(2);
    var d9=parseFloat(data.rates.KRW).toFixed(2);
    
    //function fn1(){
    var select=document.getElementById("select1");
    var a=select.options[select.selectedIndex].value;
    var inp=document.getElementById("txt1").value;
    var answer = document.getElementById("answer");
   console.log(d0);
    var ans = 0.00;
    if(inp>=0){
        if (a==1){
            ans=inp*(d0/d1);
        }else if (a==2){
            ans=inp*114.14;
        }else if (a==3){
            ans=inp*2.46;
        }else if (a==4){
            ans=inp*600.05;
        }else if (a==5){
            ans=inp*232.63;
        }else if (a==6){
            ans=inp*1.75;
        }else if (a==7){
            ans=inp*2.38;
        }else if (a==8){
            ans=inp*26.46;
        }else if (a==9){
            ans=inp*0.15;
        }
        var ans=parseFloat(ans).toFixed(2);
        answer.innerHTML="Rs. "+ans;
    }else{
        alert("Enter a valid number!");
        document.getElementById("txt1").value = "";
    }


}).catch(function (error){
    console.error('Something went wrong!!');
    console.error(error);
});
}