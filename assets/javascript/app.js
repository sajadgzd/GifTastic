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
            $(".category").append("<button class='buttons btn btn-primary' data-name=" + list[i] + ">" + list[i] + "</button>");
        }
    }

    $(document).on("click", ".buttons", function() {
        $(".giph").empty();
        var queryURL = queryURLbase + "&q=" + $(this).attr("data-name");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            console.log(queryURL);
            for (let i = 0; i < 10; i++) {
                $(".giph").prepend($(`<div class='holder-${[i]} holders' >`));
                $(`.holder-${[i]}`).append(`<img src=${response.data[i].images.fixed_height_still.url} data-animate=${response.data[i].images.fixed_height_downsampled.url} data-still=${response.data[i].images.fixed_height_still.url} data-status='still'/>`);
                $(`.holder-${[i]}`).prepend(`<p>Rating: ${response.data[i].rating}</p>`);
                $(`.holder-${[i]}`).prepend(`<div>Title: ${response.data[i].title}</div>`);
            }

        })
    });

    $(document).on("click", "img", function() {
        if ($(this).attr("data-status") === "still") {
            var animate = $(this).attr("data-animate");
            $(this).attr("src", animate);
            $(this).attr("data-status", "animated");
        } else {
            var still = $(this).attr("data-still");
            $(this).attr("src", still);
            $(this).attr("data-status", "still");
        }
    })



});