var isChoice1Available = false;
var isChoice2Available = false;
var isChoice3Available = false;

var jobPosition;
var hsDropOutPercent;
var cDropOutPercent;
var workForcePercent;

var webURL = "http://localhost:3000/data";
var queryURL = "http://localhost:3000/mbkHigh";
var queryURL2 = "http://localhost:3000/mbkCollege";
var queryURL3 = "http://localhost:3000/mbkWork";


$.ajax({
    url: webURL,
    method: "GET"
})
    .done(function (response) {
        var results = JSON.parse(response);

        jobPosition = results.data.response.employers[Math.floor(Math.random() * 10)].featuredReview.jobTitle;
        console.log(jobPosition);

    })

$.ajax({
    url: queryURL,
    method: "GET"
})
    .done(function (response) {
        var results = JSON.parse(response);

        hsDropOutPercent = parseInt(results.data.resources[Math.floor(Math.random() * 20)].Percentage);
        // storing the data from the AJAX request in the results variable
        console.log(hsDropOutPercent);

    });

$.ajax({
    url: queryURL2,
    method: "GET"
})

    .done(function (response) {
        var results = JSON.parse(response);

        cDropOutPercent = parseInt(results.data.resources[Math.floor(Math.random() * 20)].Percentage);
        // storing the data from the AJAX request in the results variable
        console.log(cDropOutPercent);

    });


$.ajax({
    url: queryURL3,
    method: "GET"
})

    .done(function (response) {
        var results = JSON.parse(response);
        console.log(results);
        workForce = parseInt(results.data.resources[Math.floor(Math.random() * 20)].Percentage);
        // storing the data from the AJAX request in the results variable
        console.log(workForce);

    });





function roll100Die() {
    return Math.ceil(Math.random() * 100);
}

// function addTraitEffects(dice) {
//     var final = dice;
//     final += player.incomeStatus;
//     final += player.ethnicityBonus;
//     final += player.healthStatus;
//     return final;
// }

function checkRollSuccess(minimum, roll) {
    return roll >= minimim;
}

var statusBar = {
    health:100,
    gender: "male",
    hairColor: "yellow",
    ethnicity: "white"
}

function createStatusBar(){
    $("#stat-health").text("HP: "+statusBar.health);
    $("#stat-gender").text("Gender: "+statusBar.gender);
    $("#stat-hairC").text("Hair Color: "+statusBar.hairColor);
    $("stat-ethnicity").text("Ethnicity: "+statusBar.ethnicity);
}

$(document).on("click", "#choice1", function () {
    //insert text here//)
    if (isChoice1Available) {
        if ($(this).innerHTML === "yes"){
            var roll = addTraitEffects(roll100Die());
            if (checkRollSuccess(hsDropOutPercent, roll)) {
                console.log("hurray you passed hs");
            }
            else{
                console.log("you failed, just like the rest of us. one of us");
            }
        }
        else{
            console.log("just like the rest of us. one of us");
        }
    }
})

$(document).on("click", "#choice2", function () {
    if (isChoice2Available) {
        if ($(this).innerHTML === "yes"){
            var roll = addTraitEffects(roll100Die());
            if (checkRollSuccess(cDropOutPercent, roll)) {
                console.log("hurray you passed college");
            }
            else{
                console.log("you failed, just like the rest of us. one of us");
            }
        }
        else{
            console.log("just like the rest of us. one of us");
        }
    }

})

$(document).on("click", "#choice3", function () {
    if (isChoice3Available) {
        if ($(this).innerHTML === "yes"){
            var roll = addTraitEffects(roll100Die());
            if (checkRollSuccess(100-workForcePercent, roll)) {
                console.log("You got a job");
            }
            else{
                console.log("You don't have a job, just like the rest of us. One of us");
            }
        }
        else{
            console.log("Neet. One of us");
        }
    }

})



