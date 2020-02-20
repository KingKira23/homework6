



// $("#search").on("click", function (event) {

//     event.preventDefault();

let inputCity = $("#inputCity")
let local = $("#location")
let temp = $("#temp")
let humidity = $("#humidtiy")
let uv = $("#UVIndex")
let ws = $("#windSpeed")
let apikey = "ec335df44d36fb8af19f228381587d4b";
let fiveDayList = $("#fiveDayList")
// let last = $("#last")
// let city = JSON.stringify(inputCity)

let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=" + apikey;
$.ajax({
    url: weatherURL,
    method: "GET"
})
    .then(function (response) {

        var lat = response.coord.lat
        var lon = response.coord.lon

        let uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apikey + "&lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: uvURL,
            method: "GET"
        })
            .then(function (response) {

                uv.text("  " + response.value)


            });


        // var button = $("<button>")
        // button.addClass("buttoninput")
        // button.text(houston)
        // last.append("button")
        let out = response;
        local.text(out.name)
        temp.text("  " + out.main.temp + "K")
        ws.text("  " + out.wind.speed)
        humidity.text("  " + out.main.humidity)



    });


let fiveweatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=" + apikey;
console.log
$.ajax({
    url: fiveweatherURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        console.log(response.list[0]);

        for (i = 0; i < 5; i++) {
            var index = i * 8
            console.log(response.list[index]);
            var day = response.list[index].dt_txt;
            var daytemp =response.list[index].main.temp;
            var dayhum = response.list[index].main.humidity;
            console.log(day);

            var fiveday = $("<div>")
            fiveDayList.append(fiveday)
            fiveday.addClass("fiveDay")
            fiveday.addClass("col-2")
            var fdayD = $("<h3>")
            fdayD.text(day)
            fiveday.append(fiveday)
            var fDaystatst = $("<p>")
            fDaystatst.text("Temp:  " + daytemp)
            fiveday.append(fDaystatst)
            var fDaystatsh = $("<p>")
            fDaystatsh.text("Hum:  " + dayhum)
            fiveday.append(fDaystatsh)
            


        }
    });

// })