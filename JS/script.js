// IPO-Input -> process -> Output

//Constants and variables  
 const API_URL = {
	"async": true,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bobsburgers&country=uk",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "bc08df07a1msh300c9fd8b57a6a6p1d7054jsn0439cf76e0d2",
		"X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
	}
};

$.ajax(API_URL).done(function (response) {
	console.log(response);
});
//Cache DOM elements refrences

//Register Event Listener

//Functions
