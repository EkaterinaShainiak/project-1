
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
    
    console.log(character.hairColor);
    
    character.ethnicityChosen = $("input[name=question-"+1+"]:checked").val();
                  
    console.log(character.ethnicityChosen);

    character.genderChosen = $("input[name=question-"+2+"]:checked").val();

    console.log(character.genderChosen);

    character.name = $("#name").val();

    console.log(character.name);

    console.log("running phase 1.5");
    game.phase1_5();
    console.log("About to run character display");
    game.characterDisplay();
    
    
});