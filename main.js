// Question No1

//  (false, true, carnivore)
var eatsPlants = false;
var eatsAnimals = true;

var animal = (eatsPlants == true && eatsAnimals == true) ? 'eatsPlants is true && eatsAnimals is true = omnivore' :
    (eatsPlants == false && eatsAnimals == true) ? 'eatsPlants is false && eatsAnimals is true = carnivore' :
        (eatsPlants == true && eatsAnimals == false) ? 'eatsPlants is true && eatsAnimals is false = herbivore' : 'eatsPlants is false && eatsAnimals is false = undefined';
console.log(animal);

//  (true, true, omnivore)
var eatsPlants = true;
var eatsAnimals = true;

var animal = (eatsPlants == true && eatsAnimals == true) ? 'eatsPlants is true && eatsAnimals is true = omnivore' :
    (eatsPlants == false && eatsAnimals == true) ? 'eatsPlants is false && eatsAnimals is true = carnivore' :
        (eatsPlants == true && eatsAnimals == false) ? 'eatsPlants is true && eatsAnimals is false = herbivore' : 'eatsPlants is false && eatsAnimals is false = undefined';
console.log(animal);

//  (true, false, herbivore)
var eatsPlants = true;
var eatsAnimals = false;

var animal = (eatsPlants == true && eatsAnimals == true) ? 'eatsPlants is true && eatsAnimals is true = omnivore' :
    (eatsPlants == false && eatsAnimals == true) ? 'eatsPlants is false && eatsAnimals is true = carnivore' :
        (eatsPlants == true && eatsAnimals == false) ? 'eatsPlants is true && eatsAnimals is false = herbivore' : 'eatsPlants is false && eatsAnimals is false = undefined';
console.log(animal);

//  (false, false, undefined)
var eatsPlants = false;
var eatsAnimals = false;

var animal = (eatsPlants == true && eatsAnimals == true) ? 'eatsPlants is true && eatsAnimals is true = omnivore' :
    (eatsPlants == false && eatsAnimals == true) ? 'eatsPlants is false && eatsAnimals is true = carnivore' :
        (eatsPlants == true && eatsAnimals == false) ? 'eatsPlants is true && eatsAnimals is false = herbivore' : 'eatsPlants is false && eatsAnimals is false = undefined';
console.log(animal);

// Question No2
// change the value of `musicians` 
var musicians = 1;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}
// change the value of `musicians` 
var musicians = 0;
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}

// Qestion No3
var room = "billiards room";

var suspect = "Mr. Parkes";

// Initial values
var weapon = "";
var solved = false;

if(room == "ballroom"){
    weapon = "poison";
}else if(room == "gallery"){
    weapon = "trophy";
}else if(room == "billiards room"){
    weapon = "pool stick";
}else if(room == "dining room"){
    weapon = "knife";
}

if(room == "dining room."){
    suspect = "Mr. Parkes";
}else if(room == "gallery"){
    suspect = "Ms. Van Cleve";
}else if(room == "billiards room"){
    suspect = "Mrs. Sparr";
}else if(room == "ballroom"){
    suspect = "Mr. Kalehoff";
}

if (room == "dining room" && suspect == "Mr. Parkes"){
    solved=true
}else if (room == "gallery" && suspect == "Ms. Van Cleve"){
    solved=true
}else if (room == "billiards room" && suspect == "Mrs. Sparr"){
    solved=true
}else if (room == "ballroom" && suspect == "Mr. Kalehoff"){
    solved=true
}else{
    console.log("nothing")
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}


// Qusetion4
var balance = -325;
var checkBalance = true;
var isActive = true;

if(checkBalance === true){
    if(isActive = true){
        if(balance>=0){
            console.log("more than 0");
        }else{
            console.log("less than 0");
        }

    }
}

// Question5
var flavor= "vanilla";
var vessel= "cone";
var toppings= "sprinkles";

if((flavor == "vanilla" || flavor == "chocolate") && 
    (vessel == "cone" || vessel == "bowl") &&
     (toppings == "sprinkles" || toppings == "peanuts")){
        console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
}