//global variables

var isChoice1Available = false;
var isChoice2Available = false;
var isChoice3Available = false;

var jobPosition;
var hsDropOutPercent;
var cDropOutPercent;
var workForcePercent;


//API calls (utilizes server.js)
var webURL = "http://localhost:3000/data";
var queryURL = "http://localhost:3000/mbkHigh";
var queryURL2 = "http://localhost:3000/mbkCollege";
var queryURL3 = "http://localhost:3000/mbkWork";
var panel = $(".content");

// Questions
var characterQuestions = [{
    question: "Select your hair color:",
    answers: ["Blonde", "Black", "Ginger"]
},  {
    question: "Select your ethnicity:",
    answers: ["Black", "White", "Hispanic", "Asian"]
},  {
    question: "Select your gender:",
    answers: ["Female", "Male", "Unknown"]
}];

// Character object
var character = {
    hairColor: "",
    ethnicityChosen: "",
    genderChosen: "",
    name: "",
};

var highschool = [{
    question: "Life decision 1",
    answers: true,
}];

var hair;

// Narration 
var nar1_5 = "This is what we want to narrate to player";

var hairColor;
var ethnicityChosen;
var genderChosen;
var userName;

//api calls

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

var game = {

    phase1: function()   {

        $("button").remove();
        $("#h1tag").html("Phase 1");
        $("#ptag").html("Select your character traits");


        for (var i = 0; i < characterQuestions.length; i++)  {
            panel.append("<h2>" + characterQuestions[i].question + "</h2>");
            for (var j = 0; j < characterQuestions[i].answers.length; j++)  {
                panel.append("<input type='radio' name='question-" + i +
                 "' value='" + characterQuestions[i].answers[j] + "'>" + characterQuestions[i].answers[j]);
            }
        }
        panel.append("<br>" + "Enter your name:" + "<br>" + "<input type='text' name='name' value='' id='name'>")
        panel.append("<br>" + "<button id='next'>Next</button>");

        console.log("finished character creation");

    },


    phase1_5: function()  {

        $("#h1tag").html("Phase 1.5");
        $("#ptag").html("Narration");

        $(".content").html("");

        panel.append(nar1_5);

        panel.append("<br>" + "<button id='next'>Next</button>");
    },

    characterDisplay: function() {
        console.log(character);
        if (character.genderChosen = 'Male' && character.ethnicityChosen == 'White' && character.hairColor == 'Blonde') {
            $(".content").append("<img src='Assets/Images/malewhiteblonde.png'>");    
            console.log("append image");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'White' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/malewhiteblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'White' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/malewhiteginger.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/malehispanicblonde.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/malehispanicblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/malehispanicginger.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/maleasianblonde.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/maleasianblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/maleasianginger.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Black' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/maleblackblonde.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Black' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/maleblackblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Black' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/maleblackginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'White' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/femalewhiteblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'White' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/femalewhiteblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'White' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/femalewhiteginger.png'>");
        }    
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/femalehispanicblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/femalehispanicblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/femalewhispanicginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/femaleasianblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/femaleasianblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/femaleasianginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Black' && character.hairColor == 'Blonde') {
            panel.append("<img src='Assets/Images/femaleblackblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Black' && character.hairColor == 'Black') {
            panel.append("<img src='Assets/Images/femaleblackblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Black' && character.hairColor == 'Ginger') {
            panel.append("<img src='Assets/Images/femaleblackginger.png'>");
        }
    },

    phase2:  function() {

        $("#h1tag").html("Phase 2");
        $("#ptag").append("Highschool");
    }
};

// Next button needs to dynamically move into next phase of game
// Use stored values to pull images and disply accordingly 

// Click event(s)
$(".startButton").on("click", function()    {
    console.log("start button clicked clicked");
    game.phase1();
});

$(document).on("click","#next", function()   {
    console.log("clicked");     
    
    character.hairColor = $("input[name=question-"+0+"]:checked").val();
    character.ethnicityChosen = $("input[name=question-"+1+"]:checked").val();
    character.genderChosen = $("input[name=question-"+2+"]:checked").val();
    character.name = $("#name").val();

    console.log("running phase 1.5");
    game.phase1_5();
    
    game.characterDisplay();
    
    
});



//Game Logic 
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
    profession: jobPosition,
    location: "Irvine"
}

function createStatusBar(){
    $("#stat-health").text("HP: "+statusBar.health);
    $("#stat-profession").text("Profession: "+statusBar.profession);
    $("#stat-location").text("Location: "+statusBar.location);
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
