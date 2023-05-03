var recipename = document.getElementById("recipename");
var ingredient = document.getElementById("ingredient");
var instruction = document.getElementById("instruction");
var ingredientList = document.getElementById("listOfIngredients");
var instructionList = document.getElementById("listOfInstructions");

const listOfIngredients = [];
const listOfInstructions = [];
const recipe = [];

// Add a new ingredient once the button is clicked
document.getElementById("ingredient_submit").addEventListener("click", function() {
    
    if (ingredient.value != "")
    {
        listOfIngredients.push(ingredient.value);
        
        var li = document.createElement("li");
        li.innerHTML = ingredient.value;
        ingredientList.appendChild(li);

        ingredient.value  = "";
    }
})

// Add a new instruction each time the button is clicked
document.getElementById("instruction_submit").addEventListener("click", function() {
    
    if (instruction.value != "")
    {
        listOfIngredients.push(instruction.value);
        
        var li = document.createElement("li");
        li.innerHTML = instruction.value;
        instructionList.appendChild(li);

        instruction.value  = "";
        
    }
})

// Save recipe into localstorage
document.getElementById("create_recipe").addEventListener("click", function() {
    recipe.push(listOfIngredients, listOfInstructions);
    window.localStorage.setItem(recipename.value, JSON.stringify(recipe));
    listOfIngredients = [];
    listOfInstructions = [];
    recipename.value = "";
    instruction.value = "";
    ingredient.value = "";
})