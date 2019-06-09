$(document).ready(function() {
    var list = ["horse", "dog", "cat", "bird"];
    // var key = Wohrfl96PkbUD9MWz44E12WzGd9ODdrD;
    var queryURLbase = "https://api.giphy.com/v1/gifs/search?api_key=Wohrfl96PkbUD9MWz44E12WzGd9ODdrD";
    displayButtons();

    $("#add-cartoons").on("click", function() {
        event.preventDefault();
        var userInput = $("#cartoons-input").val().trim();
        list.push(userInput);
        console.log(list);
        displayButtons();
    });

    function displayButtons() {
        $(".category").empty();
        for (let i = 0; i < list.length; i++) {
            $(".category").append("<button class='buttons' data-name=" + list[i] + ">" + list[i] + "</button>");
        }
    }

    $(document).on("click", ".buttons", function() {

        var queryURL = queryURLbase + "&q=" + $(this).attr("data-name");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            console.log(queryURL);
            for (let i = 0; i < 10; i++) {
                $(".giph").prepend(`<img class='holders' src=${response.data[i].images.fixed_height_still.url} data-animate=${response.data[i].images.fixed_height_downsampled.url} />`)
            }

        })
    });

    $(document).on("click", ".holders", function() {
        var animate = $(this).attr("data-animate")
        $(this).attr("src", animate);
    })



});