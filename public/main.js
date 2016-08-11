console.log("hi from main.js")


var printBeers = function (stuff) {
  $(".beers").append("hi");
  for (i = 0; i < stuff.length; i ++) {
    $(".beers").append(stuff[i].name + " is of the style:" + stuff[i].style);
    $(".beers").append('<br>')
  }
}

var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'http://localhost:8000/beers',
    dataType: "json",
    success: function(response) {
      console.log("hi. this is the fetch success function! you got this far. you're so close.")
      printBeers(response)

      
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
}


fetch()



  // var array = [{name: 'shai', hair: 'none'}, {name: 'bob', hair: 'lots'}]




