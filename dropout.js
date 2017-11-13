
    function retrieveDropout() {

        var sex = "Males"
        var race = "Hispanic"

        var queryURL = "https://api.ed.gov/data/mbk-highschool-dropout?api_key=zTD7z8jkkfgQIkgXwcya3JHJ8ulInlpfaIsdGFga"+ "&Sex=" + sex + "&Year=2014&Race/Ethnicity =" + race
     
      
        // AJAX call 
        $.ajax({
          url: queryURL,
          method: "GET"
        })
      
        .done(function(response) {
  
          // storing the data from the AJAX request in the results variable
          var results = response.data;
          var dropoutRate = results.resources.Percentage
        console.log(dropoutRate)
        });
      
      }
      retrieveDropout();
     
