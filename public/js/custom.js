 //CONFIGURABLE DEFAULT VALUE
let activeSpeedMs = 1;
let activeSpinCycle = "normal";

let maxLevel = 3;
let levelZero = 0;

window.onload = function () {
    if (activeSpeedMs > 3){
        alert("Enter either 0, 1, 2, 3 ONLY, Set Default Speed to 0, and  Rotation Type to Normal.")
        activeSpeedMs = 0;
        setActiveSpeedMs(activeSpeedMs);
        setActiveSpinCycle(activeSpinCycle);
    }else{ 
        setActiveSpeedMs(activeSpeedMs);
        setActiveSpinCycle(activeSpinCycle);
    }
};
 
fnspeed = () => {
    curSpeedValue = parseInt(document.getElementById("idspeedNumber").value, 10);
    // If value is NaN set curSpeedValue to "0" , Add Speed
    curSpeedValue = isNaN(curSpeedValue) ? 0 : curSpeedValue;
    curSpeedValue++; 

    setActiveSpeedMs(curSpeedValue);
}


fnreverse = () => {
    curSpinCycle = document.getElementById("idrotationType").value;
    if(curSpinCycle == "normal"){
        document.getElementById("idrotationType").value = "reverse";
        document.getElementById("idfan").style.animationDirection = "reverse";
    }else{
        document.getElementById("idrotationType").value = "normal";
        document.getElementById("idfan").style.animationDirection = "normal";
    }
}


setActiveSpeedMs = (x) => {   
    document.getElementById("idspeedNumber").value = x;

    var animObj = document.getElementById("idfan"); 
    switch (x) {   
        default:
            var num = 0;// can able to create JSON to have configuration value
            var n = num.toString();
            animObj.style.animationDuration = (n+"ms"); 
            document.getElementById("idspeedNumber").value = 0;
        break;

        case 0:
            var num = 0;// can able to create JSON to have configuration value
            var n = num.toString();
            animObj.style.animationDuration = (n+"ms");   
        break;

        case 1:
            var num = 1500;// can able to create JSON to have configuration value
            var n = num.toString();
            animObj.style.animationDuration = (n+"ms"); 
        break; 

        case 2:
            var num = 1000;// can able to create JSON to have configuration value
            var n = num.toString();
            animObj.style.animationDuration = (n+"ms");   
        break; 

        case 3:
            var num = 500;// can able to create JSON to have configuration value
            var n = num.toString();
            animObj.style.animationDuration = (n+"ms");  
        break;  
    }  
}

setActiveSpinCycle = (y) => {
    document.getElementById("idrotationType").value = y;
}