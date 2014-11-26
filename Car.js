function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  //TODO: add year, color, seats here
  this.year = year;
  this.color = color; 
  this.seats = seats; 

  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor; 
};

Car.prototype.start = function(){
	this.running = true; 
}
Car.prototype.off = function() {
	this.running = false;
}
Car.prototype.driveTo = function(destination) {
	if (this.running === true){
	console.log("Driving to " + destination)
	return true; 
	}
	return false;
	}
Car.prototype.park = function() {
	if (this.running === false) {
		console.log("parked!!!")
		return true; 
	}
	return false; 
}	
Car.prototype.pickUp = function(name) {
	if ((this.running) && (this.seats > this.passengers.length+1)) {
		console.log("driving to pickup " + name);
		this.passengers.push(name);
		return true;
	}
	return false; 
}

Car.prototype.dropOff = function(name) {
	var rider = this.passengers.indexOf(name);
	if (rider >= 0 && this.running === true) {
		this.passengers.splice(rider, 1);
		console.log("driving to drop off " + name);
		return true; 
	}
		return false;
}

Car.prototype.passengerCount = function() {
	return (this.passengers.length); 
}




















// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;