
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

        var jobPosition = results.data.response.employers[Math.floor(Math.random() * 10)].featuredReview.jobTitle;
        console.log(jobPosition);

    })

$.ajax({
    url: queryURL,
    method: "GET"
})

    .done(function (response) {
        var results = JSON.parse(response);

        var hsDropOutPercent = parseInt(results.data.resources[Math.floor(Math.random() * 20)].Percentage);
        // storing the data from the AJAX request in the results variable
        console.log(hsDropOutPercent);

    });

$.ajax({
    url: queryURL2,
    method: "GET"
})

    .done(function (response) {
        var results = JSON.parse(response);

        var cDropOutPercent = parseInt(results.data.resources[Math.floor(Math.random() * 20)].Percentage);
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
        var workForce = parseInt(results.data.resources[Math.floor(Math.random() * 20)].Percentage);
        // storing the data from the AJAX request in the results variable
        console.log(workForce);

    });



