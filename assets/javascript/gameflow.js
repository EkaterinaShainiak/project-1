
var panel = $(".content");

// Questions
var characterQuestions = [{
    question: "Select your hair color:",
    answers: ["Blonde", "Black", "Ginger"]
},  {
    question: "Select your ethnicity:",
    answers: ["White", "Not White", "Asian"]
},  {
    question: "Select your gender:",
    answers: ["Female", "Male", "Unknow"]
}
];

// Narration 
var nar1_5 = "This is what we want to narrate to player";

var characterTraits;
var game = {

    phase1: function()   {

        $("button").remove();
        $("#h1tag").html("Phase 1");
        $("#ptag").html("Select your character traits");

        for (var i = 0; i < characterQuestions.length; i++)  {
            panel.append("<h2>" + characterQuestions[i].question + "</h2>");
            for (var j = 0; j < characterQuestions[i].answers.length; j++)  {
                panel.append("<input type='radio' name='question-" + i + " 'value=' " + characterQuestions[i].answers[j] + "'' class='checkbox'>" + characterQuestions[i].answers[j] + " ");
            }
        }
        panel.append("<br>" + "<button id='next'>Next</button>");
        characterTraits = $('input').val();
        console.log(characterTraits);

        $("#next").on("click", function()   {
            console.log("clicked");
            game.phase1_5();
        });
    },

    phase1_5: function()  {

        $("#h1tag").html("Phase 1.5");
        $("#ptag").html("Narration");

        panel.html(nar1_5);

        panel.append("<br>" + "<button id='next'>Next</button>");
    }
}

// Next button needs to dynamically move into next phase of game
// Use stored values to pull images and disply accordingly 

// Click event(s)
$(".startButton").on("click", function()    {
    console.log("clicked");
    game.phase1();
});
