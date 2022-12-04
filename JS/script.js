//IPO-Input -> process -> Output

//Constants and variables
const $name = $("#name");
const $StreamingService = $("#streaming-service");
const $imdb = $("#imdb");
const $pic = $("#pic");
const letters = "abcdefghijklmnopqrstuvwxyz"
const $button = $("#generateMov") 

/////////
//Functions
/////////

function handleGetData(event) {
const randomLetter = letters[Math.floor(Math.random() * letters.length)];
const API_URL = {
  async: true,
  crossDomain: true,
  url: `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${randomLetter}`,
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc08df07a1msh300c9fd8b57a6a6p1d7054jsn0439cf76e0d2",
    "X-RapidAPI-Host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  },
};
  // event.preventdefault();
  $.ajax(API_URL).then(
    function (data) {
      console.log(data);
      $name.text(data.results[0].name);
      $StreamingService.text(data.results[0].locations[0].display_name);
      $imdb.attr("href", data.results[0].external_ids.imdb.url);
	  $pic.attr("src", data.results[0].picture)
	
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}


//Register Event Listener
$button.on("click", handleGetData)
//Functions
