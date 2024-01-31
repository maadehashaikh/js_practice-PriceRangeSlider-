let minRangeInput = document.getElementById("minRangeInput");
let minRangeSlider = document.querySelector(".min-range");
minRangeInput.addEventListener("input", function() {
    if(minRangeInput.value > 2500){
        alert("You are exceding the minimum range");
    }
    else{
    minRangeSlider.value = minRangeInput.value;
    }
});

minRangeSlider.addEventListener("input",function(){ 
    minRangeInput.value = minRangeSlider.value;
});

let maxRangeInput = document.getElementById("maxRangeInput");
let maxRangeslider = document.querySelector(".max-range");
maxRangeInput.addEventListener("input",function(){
    if(maxRangeInput.value >10000){
        alert("You are exceding the maximum range");
    }
    else{
     maxRangeslider.value = maxRangeInput.value;
    }
});

maxRangeslider.addEventListener("input",function(){ 
    maxRangeInput.value = maxRangeslider.value;
});
















// minRangeBtn.addEventListener("click", function() {
//     // Get the value from the input field
//     let inputValue = minRangeInput.value;
    
//     // Update the value of the minRangeSlider
//     minRangeSlider.value = inputValue;
//   });
