const getRecipes = () => {
  const ingredientInput = document.getElementById('ingredintInput').value;
  const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim()).join(',');

  document.getElementById('recipeList').innerHTML = ''


  if(ingredients){
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=9991683461f643d7b40179019ca843d5`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      displayRecipes(data)
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }else{
    alert('Please enter atleast one ingredient')
  }
}

const displayRecipes = (recipes) => {
  const recipeList = document.getElementById('recipeList')
  console.log(recipeList)

  if(recipes.length > 0){
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe-card');
      recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}" />
      <p>Missing ingredients: ${recipe.missedIngredientCount}</p>
      `;

      recipeList.appendChild(recipeElement);
    })
  }
  else{
    recipeList.innerHTML = '<p>No recipes found for the given ingredients.</p>';
  }

}