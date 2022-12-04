//IPO-Input -> process -> Output

//Constants and variables
const $name = $("#name");
const $StreamingService = $("#streaming-service");
const $imdb = $("#imdb");
const $pic = $("#pic");

const API_URL = {
  async: true,
  crossDomain: true,
  url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bobs-burgers&country=uk",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc08df07a1msh300c9fd8b57a6a6p1d7054jsn0439cf76e0d2",
    "X-RapidAPI-Host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  },
};
/////////
//Functions
/////////
function handleGetData(event) {
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

handleGetData();
//Register Event Listener

//Functions
