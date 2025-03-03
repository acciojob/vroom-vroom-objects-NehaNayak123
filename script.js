// Complete the js code
// function Car(make, model) {}

// function SportsCar(make, model, topSpeed) {}

// // Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;
// ////////////////////////////////////
class Car(){
	constructor(make, model){
		make=this.make,
		model=this.model
	}
	getMakeModel(){
		return `${this.make} ${this.model}`
	}
}
class SportsCar extends Car(){
	constructor(make, model,topSpeed){
		super(make, model);
		topSpeed=this.topSpeed;
	}
	getTopSpeed(){
		return this.topSpeed
	}
}


window.Car = Car;
window.SportsCar = SportsCar;
















