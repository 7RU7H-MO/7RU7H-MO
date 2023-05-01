//Image sources:
//[1] menuImage - postermywall - https://www.postermywall.com/index.php/art/template/9782aa71d886f7d1a7c8e6e87e56b79f/fast-food-menu-template-design
//[2] mainImage - gitHub - https://github.com/glasklart/hd/issues/5056

//Main variables
// Retrieve nutritional data for a given food
var foodName = getColumn("Fast Food Nutrition", "Name");
var foodCalorie = getColumn("Fast Food Nutrition", "Calories");
var foodFat = getColumn("Fast Food Nutrition", "Fat (g)");
var foodCarbs = getColumn("Fast Food Nutrition", "Carbohydrate (g)");
var foodProtein = getColumn("Fast Food Nutrition", "Protein (g)");
var foodCholesterol = getColumn("Fast Food Nutrition", "Cholesterol (mg)");
var foodSatFat = getColumn("Fast Food Nutrition", "Saturated Fats (g)");

//Initialize filtered lists
var filteredName = [];
var filteredNutrition = [];
var filteredValues = [];

// function that resets the list
function resetLists() {
  filteredName = [];
  filteredNutrition = [];
  filteredValues = [];
  
 }

//Parameter - mealInput 
//Resets the list on each input so it would not end up repeating
//Filters the list on a food´s name, nutrition and its values
//Determines user´s choice on meal and the total amount on nutrition
function filter(mealInput, nutInput)  {
 resetLists();
 for(var i=0; i < foodName.length; i++)   {
  if(mealInput == foodName[i]){
    appendItem(filteredName, mealInput);
    appendItem(filteredNutrition, nutInput);
    appendItem(filteredValues, getFoodValue(nutInput)[i]);

        }
    }
 }
 

// Determines the total amount of value given on the user´s input of choices
// runs the filtered list
function getFoodValue(nutInput) {
if (nutInput == "Calories") {
    return foodCalorie;
} else if(nutInput == "Fat (g)") {
  return foodFat;
}  else if(nutInput == "Protein (g)") {
  return foodProtein;
}  else if((nutInput == "Carbohydrates (g)")) {
  return foodCarbs;
}  else if((nutInput == "Cholesterol (mg)")) {
  return foodCholesterol;
}  else if(nutInput == "Saturated Fats (g)") {
  return foodSatFat;
} else return [];

      }

//meal/food choice / functions [On-events]
onEvent("mealDropdown", "input", function( ) {
  filter(getText("mealDropdown"), getText("nutDropdown"));
  updateScreen(filteredName, filteredNutrition, filteredValues);
  });

//Nutrition fact choice / functions [On-events]
onEvent("nutDropdown", "input", function( ) {
  filter(getText("mealDropdown"), getText("nutDropdown"));
  updateScreen(filteredName, filteredNutrition, filteredValues);
  });

//Update Screen
// Displays and runs the text on the ¨output¨ everytime the user picks a meal and nutrition
function updateScreen(nameFilter, nutFilter, weightFilter)   {
  var textOutput = "Meal: " + nameFilter + "\nNutritional Fact: " + nutFilter + "\nNutritional Value: " + weightFilter;
  setText("output",textOutput);
 }

// Button event 
// sets to another screen
onEvent("startButton", "click", function( )  {
  setScreen("screen2");
     });




