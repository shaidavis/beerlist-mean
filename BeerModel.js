var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name: {type: String, required: true},
  image_url: String,
  style: String,
  abv: Number,
  rating: Number
  // beerRating: String
});

var Beer = mongoose.model('BeerModel', beerSchema);
module.exports = Beer;

// var hellokitty = new Beer ({name:"Hello Kitty Beer", image_url:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/8c8946604-hellokitty.blocks_desktop_large.jpg", style:"Lager", abv: 10, rating: 5, beerRating:""})



