function compara()  {

    var n1= document.getElementById("num1").value;
    var n2= document.getElementById("num2").value;
    
    if(n1<n2){
        alert(n2+" é maior que "+n1);
}
    else if (n2<n1){
        alert(n1+" é maior que "+n2);
}
    else{
        alert("Os númereros são iguais");
}
    
}