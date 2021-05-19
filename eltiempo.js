$(document).ready(function() {

    $('#btn').click(function() {
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + $('#ciudad').val() + "&appid=333d4bf080b7b753a8b36ad0e15d92e5", function(res) {
            console.log(res)
            var temperat = (res.main.temp - 273.15).toFixed(2);
            var html_str = "";
            html_str += "<h4>El tiempo</h4>";
            html_str += "<ul>";
            html_str += res.name + " : ";
            html_str += res.weather[0].description;
            html_str += "<br>Temperatura :" + temperat + " C°";
            html_str += "<br>Coordenadas :" + res.coord.lon + " , " + res.coord.lat;
            html_str += "</ul>";
            $("#eltiempo").html(html_str);
        }, "json");

    });

});