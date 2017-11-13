// Create object to hold character traits
        // Gender, race, Hair color 
        // Create second object to hold randomly generated character traits 

        var hair = ["black", "blonde", "ginger"];
        var ethnicity = ["white", "not white", "asian",];
        var sex = ["female", "male",];

        var user = {
            hairColor: $(".box1").val(),
            race: $(".box2").val(),
            gender: $(".box3").val(),
        };

        console.log(user);

        // Create random generater to select one trait from each array to create a new object
        // Store random traits in randomUser

        var randomUser = {
            hairColor: "",
            race: "",
            gender: "",
        };

        var rand1 = hair[Math.floor(Math.random() * hair.length)];
        var rand2 = ethnicity[Math.floor(Math.random() * ethnicity.length)];
        var rand3 = sex[Math.floor(Math.random() * sex.length)];
        var randomUser = "Hair color: " + rand1 + " Ethnicity: " + rand2 + " Gender: " + rand3;
        console.log(randomUser);