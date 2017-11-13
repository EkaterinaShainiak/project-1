$(document).on("click", "#hello", function () {


    var webURL = "http://localhost:3000/data";
    var queryURL = "http://localhost:3000/mbk";

    $.ajax({
        url: webURL,
        method: "GET"
    })
        .done(function (response) {
            var results = JSON.parse(response);

            var jobPosition = results.data.response.employers[Math.floor(Math.random()*10)].featuredReview.jobTitle;
            console.log(jobPosition);

        })

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .done(function (response) {
            var results = JSON.parse(response);
           
            var dropOut = results.data.resources[Math.floor(Math.random()*20)].Percentage;
            // storing the data from the AJAX request in the results variable
            console.log(dropOut);
            
        });





})
