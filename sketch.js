var dog,sadDog,happyDog;
var foodObj;
var feed,addFoods;
var food;
var gameState = 0;


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy_dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFoods = createButton("Add Food");
  addFoods.position(800,95);
  addFoods.mousePressed(addFood);

  foodObj = new Food();

}

function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFood(){
  foodObj.getFoodStock();
  console.log(food);
  
}

function feedDog(){
    dog.addImage(happyDog);
    console.log(foodObj.getFoodStock());
    if(foodObj.getFoodStock()<= 0){
      foodObj.updateFoodStock(foodObj.getFoodStock()*0);
    }else{
      foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    }

}