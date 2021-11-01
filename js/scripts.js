// Business Logic for PlacesList ---------
function placesList() {
  this.places = {};
  this.currentId = 0;
}

placesList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

placesList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

placesList.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
};

placesList.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
};

// Business Logic for placesToSee ---------
function placesToSee (Location, Landmarks, TimeofYear, Notes, Food) {
  this.Location = Location;
  this.Landmarks = Landmarks;
  this.TimeofYear = TimeofYear;
  this.Notes = Notes;
  this.Food = Food;
}

let Paris = new placesToSee ("France", ["Eiffel Tower", "Louvre"], "Spring", "Lorem Ipsum", ["Baguette", "Croissant", "Cheese", "Wine"]);
let Dublin = new placesToSee ("Ireland", ["Guinness Brewery", "Temple Bar"], "Summer", "Lorem Ipsum", ["Beer", "Haggis", "Corned Beef"]);
let London = new placesToSee ("England", ["London Eye", "Tower of London", "Big Ben"], "Spring", "Lorem Ipsum", ["Fish & Chips", "English Breakfast"]);
let Prague = new placesToSee ("Czech Republic", ["Bridge", "Churches"], "Winter", "Lorem Ipsum", ["Party Drugs", "Sandwiches"]);
let Munich = new placesToSee ("Germany", ["Beer Tents", "Gardens"], "Spring", "Lorem Ipsum", ["Pretzel", "Schnitzel", "Cheese", "Sausage"]);

let europePlaces = new placesList();

europePlaces.addPlace(Paris);
europePlaces.addPlace(Dublin);
europePlaces.addPlace(London);
europePlaces.addPlace(Prague);
europePlaces.addPlace(Munich);

console.log(europePlaces);