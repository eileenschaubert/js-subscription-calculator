// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number("1");

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    if (subType === "basic"){
        // console.log(subType);
    } else if (subType === "standard"){
        // console.log(subType);
    } else if (subType === "premium"){
        // console.log(subType);
    }
    updateSubscriptionDiv();
});

// To ensure the value is a number data type, wrap the reassigned value with Number(). Add later
subDurationElement.addEventListener("change", function (e) {
    subDuration = e.target.value;
    if (subDuration === "1"){
        // console.log(subDuration);
    } else if (subDuration === "6"){
        // console.log(subDuration);
    } else if (subDuration === "12"){
        // console.log(subDuration);
    }
    updateSubscriptionDiv();
});

var updateSubscriptionDiv = function(){
    var monthlyCost = "5";
    if (subType === "standard") {
        monthlyCost = "7";
    } else if (subType === "premium"){
        monthlyCost = "10";
    }
    var total = Number(subDuration * monthlyCost);
    // console.log(total);
    result.innerText = `This time you have chosen a ${subDuration} month ${subType} plan for $${total}.`;
    
}