$("button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var keyWord = $(this).attr("data-key");
    var sDate = $(this).attr("data-start");
    var eDate = $(this).attr("data-end");

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
      .then(function(response) {
        console.log(response);
      });
  });
