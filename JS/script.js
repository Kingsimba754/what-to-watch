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
  $.ajax(API_URL).then(
    function (data) {
	const dblrandom = data.results[Math.floor(Math.random() * data.results.length)]
      console.log(data);
      $name.text(dblrandom.name);
      $StreamingService.text(dblrandom.locations[0].display_name);
      $imdb.attr("href", dblrandom.external_ids.imdb.url);
	  $pic.attr("src", dblrandom.picture)
	
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}


//Register Event Listener
$button.on("click", handleGetData)
//Functions
