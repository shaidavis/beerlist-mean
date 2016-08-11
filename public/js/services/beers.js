app.factory('beerListFactory', ['$http', function ($http) {
  
  var beerRating = "";

  var allBeerStyles = ["Ale", "Lager", "Cider", "Ice Cream"]

  var beerFactory = {
     beers: []
  };

  beerFactory.getAll = function () {
    return $http.get('/beers').success(function (data) { 
      console.log(data)
      // this copies the response posts to the client side
      // 'beers' under 'beerService'
      angular.copy(data, beerFactory.beers);
      // beerFactory.beers.push(data);
    });
  };


  beerFactory.addBeer = function (beer) {
    $http.post('/beers',beer)
    
    beerFactory.getAll() 

  }


  beerFactory.removeBeer = function(beer) {
    // beerFactory.beers.splice(beerFactory.beers.indexOf(beer), 1)  
    $http.post('/remove', beer)
    beerFactory.getAll() 

  }

  var editBeer = function (beer){
    console.log("editing mode")

  }

  var addRating = function (userRating, $index){
    
    //this isn't working because it's not properly finding the index of the beer being modified
    //ie, it's using the index order of the array above in the service, not of the way it's sorted on the actual page
    console.log("user rating: ", userRating)
    console.log("beer index: ", $index)
    console.log("rating before ", beerFactory.beers[$index].rating)
    //when i modify the first beer on the page (view), this is modifying the first beer in my array, above.
    beerFactory.beers[$index].rating = (beerFactory.beers[$index].rating + userRating)/2
    console.log("rating after ", beerFactory.beers[$index].rating)
    console.log("adding a rating!")
  }

  var emptyCollection = function () {    
      
    //remove beers from the user collection
    while(beerFactory.beers.length > 0){
      beerFactory.beers.splice(0,1);
    }
    
    
  }




  return {beerFactory: beerFactory, userBeers:beerFactory.beers, editBeer:editBeer, addRating:addRating, emptyCollection:emptyCollection, beerRating:beerRating, allBeerStyles:allBeerStyles};
  
}]);
