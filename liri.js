//variable to store twitter keys from keys.js file
var keys = require("./keys.js");

//dependencies
var request = require("request")
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

//saving twitter keys to client variable
var client = new Twitter(keys.twitterKeys);

//parameters
var params = {
    twitterParams: {
        screen_name: 'rachel_ut_test'
        //liri0629?
    },
    
    // spotifyParams: {
    //     type: 'track', 
    //     value: value
    // }
}

//search values/parameters
var action = process.argv[2];
var value = process.argv[3];

//omdb query URL
var queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=40e9cece";
var rottenTomatoesURL = "https://www.rottentomatoes.com/search/?search=" + value;

//switch-case statement for each argument to determine which function to run
switch (action) {
  case "my-tweets":
    showTweets();
    //console.log("my-tweets");
    break;

  case "spotify-this-song":
    showSongInfo();
    //console.log("spotify-this-song");
    break;

  case "movie-this":
    showMovieInfo();
    //console.log("movie-this");
    break;

  case "do-what-it-says":
    //whatItSays();
    //console.log("do-what-it-says");
    break;
}

//function to show last 20 tweets and when they were created in terminal
function showTweets(){
	
	client.get("statuses/user_timeline", params.twitterParams, function(error, tweets, response) {
	  if (!error && response.statusCode === 200) {
	  	 for (var i = 0; i < tweets.length; i++){
	  	 	 var tweet = tweets[i].text;
	  	 	 var tweetDate = tweets[i].created_at;
	  		 console.log(tweet);
	  		 console.log("Date Posted: " + tweetDate);
	  		 console.log("============================");
	  	 }
	  } else {
	  return console.log(error);  
		}
	});
}

//function to show song info (read instructions)
function showSongInfo(){
		console.log("show song info function working");
}

//function to call movie info
function showMovieInfo(){
	//console.log("show movie info function working");
	if (value){
		request(queryUrl, function(error, response, body){
	   	if (!error && response.statusCode === 200) {
		   	console.log("Movie Title: " + JSON.parse(body).Title);
		   	console.log("Release Year: " + JSON.parse(body).Year);
		   	console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		   	console.log("Produced In: " + JSON.parse(body).Country);
		   	console.log("Movie Language: " + JSON.parse(body).Language);
		   	console.log("Movie Plot: " + JSON.parse(body).Plot);
		   	console.log("Actors and Actresses: " + JSON.parse(body).Actors);
		   	console.log("Rotten Tomatoes URL: " + rottenTomatoesURL);
	 		}
		});
	} else {
		queryUrl = "http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&apikey=40e9cece";
		request(queryUrl, function(error, response, body){
	   	console.log("Movie Title: " + JSON.parse(body).Title);
	   	console.log("Release Year: " + JSON.parse(body).Year);
	   	console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
	   	console.log("Produced In: " + JSON.parse(body).Country);
	   	console.log("Movie Language: " + JSON.parse(body).Language);
	   	console.log("Movie Plot: " + JSON.parse(body).Plot);
	   	console.log("Actors and Actresses: " + JSON.parse(body).Actors);
	   	console.log("Rotten Tomatoes URL: " + rottenTomatoesURL);
		});
	}	
}
//function to take the text inside of random.txt and use it to call one of LIRI's commands
//whatItSays


