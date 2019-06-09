$(document).ready(function() {

    // var key = Wohrfl96PkbUD9MWz44E12WzGd9ODdrD;
    var queryURLbase = "https://api.giphy.com/v1/gifs/search?api_key=Wohrfl96PkbUD9MWz44E12WzGd9ODdrD";

    var queryURL = queryURLbase

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })


});