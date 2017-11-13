$(document).on("click", "#hello", function () {
   
    var action = "&action=job-stats";
    var city = "&city=Irvine";
    var jobType = "&jobType=fulltime";
    
    var webURL = "http://localhost:3000/data";
       
   
    $.ajax({
        url: webURL,
        method: "GET"
    })
        .done(function (response) {
            var results = JSON.parse(response);
            console.log(results);

        })


})
