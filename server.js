var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var axios = require("axios");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('assets'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "game.html"));
});


app.get("/mbk", function(req,res){
    var response = axios.get("https://api.ed.gov/data/mbk-highschool-dropout?api_key=zTD7z8jkkfgQIkgXwcya3JHJ8ulInlpfaIsdGFga")
    .then(function(response){
        console.log(response);
        var cache = [];
        var data = JSON.stringify(response, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }); 
        console.log(data);
        res.send(data)
    }).catch(function(error){
        console.log(error);
    });
})

app.get("/data", function(req,res){
    var response = axios.get("http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=221365&t.k=bKGfpuLKmoI&action=employers&&userip=169.234.94.40&useragent=Chrome&action=job-stats&city=Irvine&jobType=fulltime")
    .then(function(response){
        console.log(response);
        var cache = [];
        var data = JSON.stringify(response, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }); 
        console.log(data);
        res.send(data)
    }).catch(function(error){
        console.log(error);
    });
    
    

})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});