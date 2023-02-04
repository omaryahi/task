let a,b,c
document.getElementById("bt").onclick=function(){
    a=document.getElementById("a").value
    b=document.getElementById("b").value
    c=document.getElementById("c").value
    if ((Math.pow(b, 2)-(4*a*c))>0) {
        console.log(((-b+Math.sqrt(Math.pow(b ,2)-(4*a*c))))/(2*a))
        console.log(((-b-Math.sqrt(Math.pow(b ,2)-(4*a*c))))/(2*a))

    }
    else if ((Math.pow(b, 2)-(4*a*c))==0) {
       
        console.log((-b)/(2*a))

    }
    else{
        console.log("no solution")

    }

}
