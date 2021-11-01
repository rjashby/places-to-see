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
  console.log(place);
  console.log(this.places);
};

// Business Logic for placesToSee ---------
function placesToSee (Location, Landmarks, TimeofYear, Notes, Food) {
  this.Location = Location;
  this.Landmarks = Landmarks;
  this.TimeofYear = TimeofYear;
  this.Notes = Notes;
  this.Food = Food;
}
