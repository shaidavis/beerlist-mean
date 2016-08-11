// curl --data 'image=http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/8c8946604-hellokitty.blocks_desktop_large.jpg&name=Hello Kitty Beer&style=Lager&abv=10&rating=5&beerRating='  http://localhost:8000/beers
// curl --data 'image=imageurlgoeshere&name=Hello Kitty Beer&style=Lager&abv=10&rating=5&beerRating='  http://localhost:8000/beers


app.service('beerListService', function(){
       
  
  var beerRating = "";

  var allBeerStyles = ["Ale", "Lager", "Cider", "Ice Cream"]

  var userBeersArray = [
     


    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/8c8946604-hellokitty.blocks_desktop_large.jpg",name:"Hello Kitty Beer", style:"Lager", abv: 10, rating: 5, beerRating:""},
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/beard_beer_0.png",name:"Beard Beer", style:"Ale", abv:25, rating: 2, beerRating:""},
    {image:"http://www.hallsley.com/files/2013/07/7-scoop-ice-cream-cone.jpg",name:"Ice Cream Beer", style:"Ice Cream", abv: 0, rating: 1, beerRating:""},
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/snakevenom.png",name:"Snake Venom", style:"Ale", abv:67.5, rating: 4.5, beerRating:""},
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/brewdog_taxidermy211_534.jpg",name:"The End of History", style:"Cider", abv: 50, rating: 3, beerRating:""},
    // {image:image, name: name, style:style, abv: abv, rating: rating, beerRating:""},
    // {image:"http://media.thesmalls.com/content/u2/TexasChainsawMassacre.jpg",name:"The Texas Chainsaw Massacre", style:1974, abv:"When Sally hears that her grandfather's grave may have been vandalized, she and her paraplegic brother set out with their friends to investigate. They soon discover a group of crazed, murderous outcasts living next door. One by one, the group is attacked by the chainsaw-wielding Leatherface, who wears a mask of human skin.", rating: 2, beerRating:""}
    ];




  var addBeer = function (beer) {

    userBeersArray.push(beer);
    
    };


  var removeBeer = function(beer) {
    userBeersArray.splice(userBeersArray.indexOf(beer), 1)  
  }

  var editBeer = function (beer){
    console.log("editing mode")

  }

  var addRating = function (userRating, $index){
    
    //this isn't working because it's not properly finding the index of the beer being modified
    //ie, it's using the index order of the array above in the service, not of the way it's sorted on the actual page
    console.log("user rating: ", userRating)
    console.log("beer index: ", $index)
    console.log("rating before ", userBeersArray[$index].rating)
    //when i modify the first beer on the page (view), this is modifying the first beer in my array, above.
    userBeersArray[$index].rating = (userBeersArray[$index].rating + userRating)/2
    console.log("rating after ", userBeersArray[$index].rating)
    console.log("adding a rating!")
  }

  var emptyCollection = function () {    
      
    //remove beers from the user collection
    while(userBeersArray.length > 0){
      userBeersArray.splice(0,1);
    }
    
    
  }




  return {userBeers:userBeersArray, addBeer:addBeer, removeBeer:removeBeer, editBeer:editBeer, addRating:addRating, emptyCollection:emptyCollection, beerRating:beerRating, allBeerStyles:allBeerStyles};


});