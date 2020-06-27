var a=1;
    function tab(){
    var b = document.getElementById("num1").value;
    for(cont=0; cont<10; cont++){
    for(conta=0; conta<=10;conta++){
    var result=a*b;
    if(conta==10){
    document.write(b+"x"+a+"="+result);
    document.write("<br>");
    a++;
            }
        }
    }
}