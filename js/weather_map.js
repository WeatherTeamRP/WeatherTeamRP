(function(){
    "use strict";
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "ebfe6fcbf45c478998118b21ec89df74",
        lat:    29.423017,
        lon:    -98.48527,
        units:  "imperial",
        cnt: 3,
    }).done(function(weather){
        var icon = weather.list[1].weather[1].icon;
        var url = "http://openweathermap.org/img/w/" + icon + ".png"
            var img = "<img src=''" + url + "'>"
                $('body').append(img);

        console.log(url);
    });

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





})();