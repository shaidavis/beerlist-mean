app.controller('mainController', ['$scope','beerListFactory', '$sce', function($scope, beerListFactory, $sce){
  
  beerListFactory.beerFactory.getAll().then(function () {
    console.log("i just made a promise")
    $scope.beers = beerListFactory.beerFactory.beers;
    
  })


  $scope.userBeers = beerListFactory.userBeers;
  $scope.allBeerStyles = beerListFactory.allBeerStyles;
  // $scope.rating = beerListFactory.beerRating

  
  

  $scope.trust = $sce.trustAsHtml;

  $scope.fastar = function ($index) {

    var star = "<i class='fa fa-star' aria-hidden='true'></i>"
    var tempRating = []
      for (j = 0; j < $index.rating; j ++) {
        tempRating.push(star)
      }
     $index.beerRating = tempRating.join("")
    return $index.beerRating
  }
 

  $scope.addBeer = function() {

    var beer = {
      image_url: $scope.image,
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      rating: $scope.rating
    }
    beerListFactory.beerFactory.addBeer(beer)

      console.log("about to push ", beer)
      
      //reset the fields in the form
      $scope.image = "";
      $scope.name = "";
      $scope.style ="";
      $scope.abv = "";
      $scope.rating = "";
  }
  
  $scope.removeBeer = function(beer) {
    beerListFactory.beerFactory.removeBeer(beer);
    
  }


  $scope.editBeer = function(beer) {
    beerListFactory.editBeer(beer)
  }

  $scope.addRating = function(userRating, $index) {
      // var userRating = $scope.userRating
      
    beerListFactory.addRating(userRating, $index)
    $scope.fastar($index)

  }

  $scope.emptyCollection = function () {
    beerListFactory.emptyCollection()

  }
  
  $scope.showMe = function(){
    if($scope.userBeers.length === 0) {
      return true;
    }else{
      return false;
    }
  }



}]);
