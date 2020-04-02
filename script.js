function fn1(){
    
    var select=document.getElementById("select1");
    var a=select.options[select.selectedIndex].value;
    var inp=document.getElementById("txt1").value;
    var answer = document.getElementById("answer");
    
    var ans = 0.0;
    if(inp>=0){
        if (a==1){
            ans=inp*187.82;
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
        answer.innerHTML="Rs. "+ans;
    }else{
        alert("Enter a valid number!");
        document.getElementById("txt1").value = "";
    }
}