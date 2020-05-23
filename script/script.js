$("#run-search").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    var keyWord = $("#search-term")[0].value;
    var sDate = $("#start-year")[0].value;
    var eDate = $("#end-year")[0].value;
    var num = $("#num-records")[0].value;

    var apiKey = "aJadpGbHZlCyvRMfkCC8GR7aK0zTxHAB";
    // Constructing a URL to search Giphy for the name of the person who said the quote
    https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyWord}&facet=true&begin_date=${bDate}&end_date=${eDate}&&api-key=${apiKey}
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyWord}&facet=true&begin_date=${sDate}&end_date=${eDate}&&api-key=${apiKey}`

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {
            console.log(response);
            var holder = $(".result");
            holder.empty();

        });

});


$("#clear-all").on("click", function (event) {
    $(".result").empty();

});


