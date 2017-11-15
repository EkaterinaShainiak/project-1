//global variables

var isChoice1Available = false;
var isChoice2Available = false;
var isChoice3Available = false;
var isCharacterChosen = false;

var jobPosition;
var hsDropOutPercent;
var hsDropOutYears = [];
var hsDropOutPercentages = [];
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
}, {
    question: "Select your ethnicity:",
    answers: ["Black", "White", "Hispanic", "Asian"]
}, {
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

        for (var i = 0; i < results.data.resources.length - 15; i++) {
            var time = results.data.resources[i].Year;
            var amount = results.data.resources[i].Percentage;

            hsDropOutYears.push(parseInt(time));
            hsDropOutPercentages.push(parseInt(amount));

        }

        console.log(results.data.resources);

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
        console.log(results.data.resources);

    });

var game = {

    phase1: function () {

        $("button").remove();
        $("#h1tag").html("Creating Your Character!");
        $("#ptag").html("Select your character traits");


        for (var i = 0; i < characterQuestions.length; i++) {
            panel.append("<h2>" + characterQuestions[i].question + "</h2>");
            for (var j = 0; j < characterQuestions[i].answers.length; j++) {
                panel.append("<input type='radio' name='question-" + i +
                    "' value='" + characterQuestions[i].answers[j] + "'>" + characterQuestions[i].answers[j]);
            }
        }
        panel.append("<br>" + "Enter your name:" + "<br>" + "<input type='text' name='name' value='' id='name'>")
        panel.append("<br>" + "<button id='next1'>Next</button>");

        console.log("finished character creation");

    },


    phase1_5: function () {

        $("#h1tag").html("This is " + character.name);
        $("#ptag").html(character.name + " is beautiful");

        $(".content").html("");

        panel.append(character.name + " is a very happy child. The only reason " + character.name + " looks like they are sad is because they just got a B+ on their test. But that's ok because " + character.name + " has a lot going for them!");

        panel.append("<br>" + "<button id='next1_7'>Next</button>");

    },

    phase1_7: function () {
        $("#h1tag").html("This is you");
        $("#ptag").html("We're not kidding, this is your character");

        panel.html("You must be thinking, 'That can't be me? I chose different traits in my character selection, there must be an error.' \nToo bad that you can't choose who you want to be because this game is a metaphor for life.");
        panel.append()//insert mindblown giphy
        panel.append("<br>" + "<button id='next1_71'>Next</button>");
    },

    phase1_71: function () {
        $("#h1tag").html("You're sad");
        $("#ptag").html("We know, but so is he, and he's dealing with it. Learn a thing or two from him.");

        panel.html("As I was saying before I was rudely interupted, You are, just like the character, an extremely unhappy and ungrateful child. Life is quite unhappy for you. \nYour parents are divorced, you haven't eaten in a couple days, and your only friend Dogo, your imaginary dog, just died.");
        panel.append("<br>" + "<button id='next2'>Next</button>");
    },

    characterDisplay: function () {
        console.log(character);
        if (character.genderChosen = 'Male' && character.ethnicityChosen == 'White' && character.hairColor == 'Blonde') {
            $(".content").append("<br>" + "<img src='Images/malewhiteblonde.png'>");
            console.log("append image");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'White' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/malewhiteblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'White' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/malewhiteginger.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/malehispanicblonde.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/malehispanicblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/malehispanicginger.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/maleasianblonde.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/maleasianblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/maleasianginger.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Black' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/maleblackblonde.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Black' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/maleblackblack.png'>");
        }
        else if (character.genderChosen = 'Male' && character.ethnicityChosen == 'Black' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/maleblackginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'White' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/femalewhiteblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'White' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/femalewhiteblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'White' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/femalewhiteginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/femalehispanicblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/femalehispanicblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Hispanic' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/femalewhispanicginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/femaleasianblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/femaleasianblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Asian' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/femaleasianginger.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Black' && character.hairColor == 'Blonde') {
            panel.append("<br>" + "<img src='Images/femaleblackblonde.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Black' && character.hairColor == 'Black') {
            panel.append("<br>" + "<img src='Images/femaleblackblack.png'>");
        }
        else if (character.genderChosen = 'Female' && character.ethnicityChosen == 'Black' && character.hairColor == 'Ginger') {
            panel.append("<br>" + "<img src='Images/femaleblackginger.png'>");
        }
    },

    phase2: function () {
        $("#h1tag").html("Highschool");
        $("#ptag").html("You have now entered High School. Congratulations. Every decision you make here, big or small, can impact the rest of your life. Will your dreams become reality or will you end up at McDonalds, making awkward small talk while taking your classmates' orders. And now it's test day.");
        panel.html("<button id='hs_good'>Open your bag to check everything is OK</button>")
        panel.append("<br>" + "<button id='hs_bad'>Run to Class before you become late</button>")
    },

    phase2_good: function () {
        var roll = roll100Die();
        if (checkRollSuccess(hsDropOutPercent, roll)) {
            $("#h1tag").html("You beat the odds");
            $("#ptag").html("You graduated high school");
            panel.html("Unlike the other " + hsDropOutPercent + "% of losers, you scraped by and got through. However, you realize that you don't have enough money to go to college, so what do you do now?");

            panel.append("<br>" + "<button id='job_good'>Submit your resume and pray</button>");
            panel.append("<br>" + "<button id='ending_bad'>Let's be real, McDonalds is the place to be</button>");

        }
        else {
            $("#h1tag").html("You lived up to your expectations!");
            $("#ptag").html("You flunked out of high school");

            panel.html("Life had gone by, like a blur. The last thing you remember is that you ran to class and failed that test. You tried and tried, but you just wasn't cut out for academics. Perhaps all this time was a waste. You spiral into depression, and feel as though there is nothing left for you.");
            panel.append("<br>" + "<button id='ending_bad'>Search for Hope</button>");
        }
    },

    phase2_bad: function () {
        $("#h1tag").html("You Dropped out of high school");
        $("#ptag").html("Seriously, you're done");
        panel.html("You last remember running to class, and realizing that you had forgotten your pencils back at home. You, with your only friend Dogo gone, didn't have anyone to turn to ask for a pencil. You failed the exam. You spiral into depression, and feel as though there is nothing left for you.");
        panel.append("<br>" + "<button id='ending_bad'>Search for Hope</button>");
    },

    phase3: function () {
        var roll = roll100Die();
        if (checkRollSuccess(100 - workForcePercent, roll)) {
            $("#h1tag").html("You struck gold");
            $("#ptag").html("You can't believe your luck");

            panel.html("In fact, no one quite understands how you got your job as a " + jobPosition + ". The company must have had a shortage of good staff or something. But yeah. Wohoo. I guess you won the game. Hope you feel good about yourself. But let's be real, you didn't really win, because this game is a metaphor for life.");
            panel.append("<br>" + "<button id='stats'>IRL Button</button>");
            
        }
        else {
            $("#h1tag").html("Drum roll please~~~");
            $("#ptag").html("dududududududuuuuu");

            panel.html("You didn't make it! You just weren't good enough. ");
            panel.append("<br>" + "<button id='stats'>IRL Button</button>");
        }
    },

    phaseEnding_bad: function () {
        $("#h1tag").html("I'm Lovin' It");
        $("#ptag").html("I mean, you don't have much else");
        panel.html("You've become the Sue Shef of McDonald's flippin' grill. You're not even sure if that's how you spell Sue Shef, but what would you know. Life is good enough. You didn't lose, because this game is a metaphor for life and there's nothing that says you win or lose.");
        panel.append("<br>" + "<button id='stats'>IRL Button</button>");
        
    },

    phase_stats: function () {
        $("#h1tag").html("Some Stats about Highschool Drop Out Rates");
        $("#ptag").html("Year vs Drop Out Percentage");
        panel.html("<canvas id='myChart' width='1600' height'900'></canvas>")
    
    
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hsDropOutYears,
                datasets: [
                    {
                        data: hsDropOutPercentages,
                        label: "HS Drop Out Rates",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                ]
            }
        
        });
    }

};

// Next button needs to dynamically move into next phase of game
// Use stored values to pull images and disply accordingly 

// Click event(s)
$(".startButton").on("click", function () {
    console.log("start button clicked clicked");
    game.phase1();
});

$(document).on("click", "#next1", function () {
    console.log("is character chosen ");

    character.hairColor = $("input[name=question-" + 0 + "]:checked").val();
    character.ethnicityChosen = $("input[name=question-" + 1 + "]:checked").val();
    character.genderChosen = $("input[name=question-" + 2 + "]:checked").val();
    character.name = $("#name").val();

    if (character.hairColor !== undefined && character.ethnicityChosen !== undefined &&
        character.genderChosen !== undefined && character.name !== "") {
        isCharacterChosen = true;
    }
    else {
        $("#h1tag").html("Silly you!");
        $("#ptag").html("You need to fill in all the fields to create your character before you continue");
    }

    //if all traits have been filled out, go to next slide
    if (isCharacterChosen) {
        game.phase1_5();
        game.characterDisplay();
    }
});

$(document).on("click", "#next1_7", function () {
    game.phase1_7();

    character.hairColor = "Black";
    character.ethnicityChosen = "Black";
    character.genderChosen = "Male";
    character.name = "You";

    game.characterDisplay();
})

$(document).on("click", "#next1_71", function () {
    game.phase1_71();

    game.characterDisplay();
});

$(document).on("click", "#next2", function () {
    game.phase2();
    game.characterDisplay();
});

$(document).on("click", "#hs_good", function () {
    game.phase2_good();
    game.characterDisplay();
});

$(document).on("click", "#hs_bad", function () {
    game.phase2_bad();
    game.characterDisplay();
});

$(document).on("click", "#ending_bad", function () {
    game.phaseEnding_bad();
    game.characterDisplay();
});

$(document).on("click", "#stats", function(){
    game.phase_stats();
})



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
    return roll >= minimum;
}

