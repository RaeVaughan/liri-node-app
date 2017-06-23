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
	console.log("tweet function working");
	
	client.get("statuses/user_timeline", params.twitterParams, function(error, tweets, response) {
	  if (!error && response.statusCode === 200) {
	  	console.log(tweets);
	  	// for (var i = 0; i < tweets.length; i++){
	  	// 	// var tweet = tweets[i].text;
	  	// 	// var tweetDate = tweets[i].created_at;
	  	// 	// console.log(tweet);
	  	// 	// console.log("Date Posted: " + tweetDate);
	  	// 	// console.log("============================");
	  	// }
	  } else {
	  console.log(error);  
		}
	  //console.log(response); 
	});
}

//function to show song info (read instructions)
function showSongInfo(){
	console.log("show song info function working")
}

//function to call movie info
function showMovieInfo(){
	console.log("show movie info function working")
}
//function to take the text inside of random.txt and use it to call one of LIRI's commands
//whatItSays


