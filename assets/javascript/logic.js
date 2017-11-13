var isChoice1Available = false;
var isChoice2Available = false;
var isChoice3Available = false;

function roll20Die() {
    return Math.ceil(Math.random() * 20);
}

function addTraitEffects(dice) {
    var final = dice;
    final += player.incomeStatus;
    final += player.ethnicityBonus;
    final += player.healthStatus;
    return final;
}

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
        if ($(this).innerHTML === ""){


            var roll = addTraitEffects(roll20Die());

            if (checkRollSuccess(10, roll)) {

            }
        }

        else{

        }


    }


})

$(document).on("click", "#choice2", function () {
    if (isChoice2Available) {
        if ($(this).innerHTML === ""){


            var roll = addTraitEffects(roll20Die());

            if (checkRollSuccess(10, roll)) {

            }
        }

        else{
            
        }


    }

})


$(document).on("click", "#choice3", function () {
    if (isChoice3Available) {
        if ($(this).innerHTML === ""){


            var roll = addTraitEffects(roll20Die());

            if (checkRollSuccess(10, roll)) {

            }
        }

        else{
            
        }


    }

})



