(function(){
    "use strict";
    // $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    //     APPID: "52520910551c39dc8d3da4d4fcb54c22",
    //     lat:    29.423017,
    //     lon:    -98.48527,
    //     units:  "imperial",
    //     cnt: 3,
    // }).done(function(weather){
    //     var icon = weather.list[1].weather[1].icon;
    //     var url = "http://openweathermap.org/img/w/" + icon + ".png"
    //         var img = "<img src=''" + url + "'>"
    //             $('body').append(img);
    //
    //     console.log(url);
    // });

    // var request = $.ajax("http://api.openweathermap.org/data/2.5/weather");
    // request.done(dayOne);
    // //request.fail(sendMessage);
    //
    // function dayOne(base){
    //     var div = "<div>";
    //     weather.forEach(function(data){
    //         div += base + "</div>"
    //     });
    //     dayOne();
    //
    // }
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "52520910551c39dc8d3da4d4fcb54c22",
            lat:    29.423017,
            lon:    -98.48527,
            units:  "imperial",
            cnt: 3
    }).done(function(data) {
        console.log(data);
        var html = "<div class=\"box col-md-4\">";
        var minTemp = data.list[0].main.temp_min + "/";
        var maxTemp = data.list[0].main.temp_max;
        var clouds = data.list[0].weather[0].main;
        var cloudsDescription = data.list[0].weather[0].description;
        var humidity = data.list[0].main.humidity;
        var wind = data.list[0].wind.speed;
        var pressure = data.list[0].main.pressure;



        $(".col-md-4").append(total);
    });




})();