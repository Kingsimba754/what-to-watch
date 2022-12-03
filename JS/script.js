//IPO-Input -> process -> Output

//Constants and variables  
const API_URL = {
	"async": true,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=theoffice&country=uk",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "bc08df07a1msh300c9fd8b57a6a6p1d7054jsn0439cf76e0d2",
		"X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
	}
};
function handleGetData(){
$.ajax(API_URL).then(function (data) {
	console.log(data);
})
};



//Register Event Listener

//Functions
