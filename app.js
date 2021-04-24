let button = document.querySelector('.button');
let name = document.querySelector('.name');
let image = document.querySelector('.image')
let ingredientHeading = document.querySelector('#ingredientHeading');
let instructionsHeading = document.querySelector('#instructionsHeading');
let ingredient1 = document.querySelector('.ingredient1');
let measure1 = document.querySelector('.measure1');
let ingredient2 = document.querySelector('.ingredient2');
let measure2 = document.querySelector('.measure2');
let ingredient3 = document.querySelector('.ingredient3');
let measure3 = document.querySelector('.measure3');
let ingredient4 = document.querySelector('.ingredient4');
let measure4 = document.querySelector('.measure4');
let ingredient5 = document.querySelector('.ingredient5');
let measure5 = document.querySelector('.measure5');
let ingredient6 = document.querySelector('.ingredient6');
let measure6 = document.querySelector('.measure6');
let ingredient7 = document.querySelector('.ingredient7');
let measure7 = document.querySelector('.measure7');
let ingredient8 = document.querySelector('.ingredient8');
let measure8 = document.querySelector('.measure8');
let ingredient9 = document.querySelector('.ingredient9');
let measure9 = document.querySelector('.measure9');
let ingredient10 = document.querySelector('.ingredient10');
let measure10 = document.querySelector('.measure10');
let ingredient11 = document.querySelector('.ingredient11');
let measure11 = document.querySelector('.measure11');
let ingredient12 = document.querySelector('.ingredient12');
let measure12 = document.querySelector('.measure12');
let ingredient13 = document.querySelector('.ingredient13');
let measure13 = document.querySelector('.measure13');
let ingredient14 = document.querySelector('.ingredient14');
let measure14 = document.querySelector('.measure14');
let ingredient15 = document.querySelector('.ingredient15');
let measure15 = document.querySelector('.measure15');
let instructions = document.querySelector('.instructions');

button.addEventListener("click", (e) => {
    e.preventDefault()


async function getData(){
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    console.log(data)
    name.innerText = data.drinks[0].strDrink;
    image.src = data.drinks[0].strDrinkThumb;
    ingredientHeading.innerText = "Ingredients:";
    instructionsHeading.innerText = "Instructions:";
    measure1.innerText = data.drinks[0].strMeasure1;
    ingredient1.innerText = data.drinks[0].strIngredient1;
    measure2.innerText = data.drinks[0].strMeasure2;
    ingredient2.innerText = data.drinks[0].strIngredient2;
    measure3.innerText = data.drinks[0].strMeasure3;
    ingredient3.innerText = data.drinks[0].strIngredient3;
    measure4.innerText = data.drinks[0].strMeasure4;
    ingredient4.innerText = data.drinks[0].strIngredient4;
    measure5.innerText = data.drinks[0].strMeasure5;
    ingredient5.innerText = data.drinks[0].strIngredient5;
    measure6.innerText = data.drinks[0].strMeasure6;
    ingredient6.innerText = data.drinks[0].strIngredient6;
    measure7.innerText = data.drinks[0].strMeasure7;
    ingredient7.innerText = data.drinks[0].strIngredient7;
    measure8.innerText = data.drinks[0].strMeasure8;
    ingredient8.innerText = data.drinks[0].strIngredient8;
    measure9.innerText = data.drinks[0].strMeasure9;
    ingredient9.innerText = data.drinks[0].strIngredient9;
    measure10.innerText = data.drinks[0].strMeasure10;
    ingredient10.innerText = data.drinks[0].strIngredient10;
    measure11.innerText = data.drinks[0].strMeasure11;
    ingredient11.innerText = data.drinks[0].strIngredient11;
    measure12.innerText = data.drinks[0].strMeasure12;
    ingredient12.innerText = data.drinks[0].strIngredient12;
    measure13.innerText = data.drinks[0].strMeasure13;
    ingredient13.innerText = data.drinks[0].strIngredient13;
    measure14.innerText = data.drinks[0].strMeasure14;
    ingredient14.innerText = data.drinks[0].strIngredient14;
    measure15.innerText = data.drinks[0].strMeasure15;
    ingredient15.innerText = data.drinks[0].strIngredient15;
    instructions.innerText = data.drinks[0].strInstructions;
    
}

getData();
})