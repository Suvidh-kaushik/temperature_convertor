

function conversion(){
    const d1=Number(document.getElementById("degree").value);
console.log(d1);
    const type1=document.querySelector("#temp-type1").value;
const type2=document.querySelector("#temp-type2").value;
let finalresult=0;
    if(type1=="fahrenheit"){
        if(type2=="celcius"){
           finalresult=(d1-32)*(5/9);
        }
        if(type2=="kelvin"){
            finalresult=(d1-32)*(5/9)+273;
        }
    }

    if(type1=="celcius"){
        if(type2=="fahrenheit"){
            finalresult=d1*(9/5)+32;
        }
        if(type2=="kelvin"){
            finalresult=d1+273;
        }
    }

    if(type1=="kelvin"){
        if(type2=="fahrenheit"){
            finalresult=((d1-273)*9/5)+32;
        }
        if(type2=="celcius"){
            finalresult=d1-273;
        }
    }

    finalresult=parseInt(finalresult);
    document.querySelector("#result").innerHTML="RESULT : "+finalresult;
}


function myFunction(){
    if(document.querySelector("#temp-type1").value=="fahrenheit"){
        document.querySelector("#degree").setAttribute("max",212);
        document.querySelector("#degree").setAttribute("min",32);
    }
}

