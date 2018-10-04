
//function definition

   var getLongestShot = function(){

        //Get the username and store in variable

        var playerName = $('#inlineFormInputName').val();

         //Check if the user has entered anything

         if(playerName == null){

            //If the input field was empty, display a message

            $('#userinfo').html("<h2 class='loading'>Whoops! Not a valid username. Try again.</h2>");
            } else {

            //They must have entered a value, carry on with API call, first display a loading message to notify the user of activity

            $('#userinfo').html("<h2 class='loading'>" + username + "...</h2>");
        }
    };

    $.getJSON("https://api.pubg.com/shards/$platform-region-shard/players?filter" + playerName + "?callback=?", function(json) {

               //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information

               if (json != "Nothing found."){

                  //Display the poster and a message announcing the result

                     $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
                 }
             };