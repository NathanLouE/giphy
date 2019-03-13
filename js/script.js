// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
  var search = $("#search-term").val();
  var request_url = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=pg&api_key=dc6zaTOxFJmzC`
  $.ajax({
      url: request_url,
      method: "GET",
      success: function(response){
          $("#image").append(`<img src=${response.data[0].images.original.url} >`);
          console.log(response.data[0].images.original.url);
      }
  })
  
  
});

$("#random").click(function(){
  var search = $("#search-term").val();
  var random = Math.random() * 100;
  var request_url = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=pg&api_key=dc6zaTOxFJmzC`
  $.ajax({
      url: request_url,
      method: "GET",
      success: function(response){
          $("#image").append(`<img src=${response.data[Math.floor(random)].images.original.url} >`);
          //console.log(response.data[].images.original.url);
      }
  })
  
  
});
