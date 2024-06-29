import recipes from './recipes.js';

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
  const randomIndex = getRandomNumber(recipes.length);
  return recipes[randomIndex];
}

function generateTags(tags) {
  return tags.map(tag => `<div class="tag">${tag}</div>`).join('');
}

function getRatingStars(rating) {
  const fullStars = '⭐'.repeat(Math.floor(rating));
  const halfStar = (rating % 1 !== 0) ? '⭐' : '';
  const emptyStars = '☆'.repeat(Math.floor(5 - rating));
  return `${fullStars}${halfStar}${emptyStars}`;
}

function generateRecipeHTML(recipe) {
  let detailsHtml = '';
  if (window.innerWidth > 400) {
    detailsHtml = `
      <div class="details">
        <div class="description">${recipe.description}</div>
        <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${getRatingStars(recipe.rating)}
        </div>
      </div>`;
  }

  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-details">
        <div class="tags-container">${generateTags(recipe.tags)}</div>
        <h2>${recipe.name}</h2>
        ${detailsHtml}
      </div>
    </div>`;
}

function init() {
  const randomRecipe = getRandomRecipe();
  const recipeHTML = generateRecipeHTML(randomRecipe);
  document.querySelector('#recipe-container').innerHTML = recipeHTML;
}

document.addEventListener('DOMContentLoaded', function() {
  init();

  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', searchHandler);

  window.addEventListener('resize', function() {
    init();
  });
});

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector('#search-input').value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

function filterRecipes(query) {
  return recipes
    .filter(recipe => {
      const nameMatch = recipe.name?.toLowerCase().includes(query) || false;
      const descriptionMatch = recipe.description?.toLowerCase().includes(query) || false;
      const tagsMatch = recipe.tags?.some(tag => tag.toLowerCase().includes(query)) || false;
      const ingredientsMatch = recipe.ingredients?.some(ingredient => ingredient.toLowerCase().includes(query)) || false;

      return nameMatch || descriptionMatch || tagsMatch || ingredientsMatch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderRecipes(recipes) {
  const recipesContainer = document.querySelector('#recipe-container');
  recipesContainer.innerHTML = recipes.map(recipe => generateRecipeHTML(recipe)).join('');
}
