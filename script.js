function fn1(){
    
    var select=document.getElementById("select1");
    var a=select.options[select.selectedIndex].value;
    var inp=document.getElementById("txt1").value;
    
    
    
     /*switch(a)
     {
             case 1:
             var ans=inp*187.82;
            break;
             case 2:
            var ans=inp*114.14;
            document.write("Rs"+ans);
            break;
            case 3:
            var ans=inp*2.46;
            document.write("Rs"+ans);
            break;
             case 4:
             var ans=inp*600.05;
             document.write("Rs"+ans);
             break;
             case 5:
             var ans=inp*232.63;
             document.write("Rs"+ans);
             break;
             case 6:
             var ans=inp*1.75;
             document.write("Rs"+ans);
             break;
             case 7:
                var ans=inp*2.38;
                document.write("Rs"+ans);
                break;
                case 8:
                    var ans=inp*26.46;
                    document.write("Rs"+ans);
                    break;

                    case 9:
                        var ans=inp*0.15;
                        document.write("Rs"+ans);
                        break;
        
     }
     document.getElementById("answer").innerHTML="Rs. "+ans;}*/
    if (a=1){
     var ans=inp*187.82;
     document.getElementById("answer").innerHTML="Rs. "+ans;
    }
     else if (a=2){
     var ans=inp*114.14;
     document.getElementById("answer").innerHTML="Rs. "+ans;}
     else if (a=3){
        var ans=inp*2.46;
        document.getElementById("answer").innerHTML="Rs. "+ans;}
        else if (a=4){
            var ans=inp*600.05;
            document.getElementById("answer").innerHTML="Rs. "+ans;}
            else if (a=5){
                var ans=inp*232.63;
                document.getElementById("answer").innerHTML="Rs. "+ans;}
                else if (a=6){
                    var ans=inp*1.75;
                    document.getElementById("answer").innerHTML="Rs. "+ans;}
                    else if (a=7){
                        var ans=inp*2.38;
                        document.getElementById("answer").innerHTML="Rs. "+ans;}
                        else if (a=8){
                            var ans=inp*26.46;
                            document.getElementById("answer").innerHTML="Rs. "+ans;}
                            else if (a=9){
                                var ans=inp*0.15;
                                document.getElementById("answer").innerHTML="Rs. "+ans;}
                                                                                                                                        
     

}