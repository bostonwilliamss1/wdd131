import recipes from './recipes.js';

document.addEventListener('DOMContentLoaded', function() {
    const recipesContainer = document.querySelector('.recipes-container');

    function displayRecipes(recipes) {
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe-card');

            const tagsHtml = recipe.tags.map(tag => `<div class="tag">${tag}</div>`).join('');

            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-details">
                    <div class="tags-container">${tagsHtml}</div>
                    <h2>${recipe.name}</h2>
                </div>
            `;

            if (window.innerWidth > 400) {
                recipeElement.querySelector('.recipe-details').innerHTML += `
                    <div class="details">
                        <div class="description">${recipe.description}</div>
                        <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                            ${getRatingStars(recipe.rating)}
                        </div>
                    </div>
                `;
            }

            recipesContainer.appendChild(recipeElement);
        });
    }

    function getRatingStars(rating) {
        const fullStars = '⭐'.repeat(Math.floor(rating));
        const halfStar = (rating % 1 !== 0) ? '⭐' : '';
        const emptyStars = '☆'.repeat(Math.floor(5 - rating));
        return `${fullStars}${halfStar}${emptyStars}`;
    }

    displayRecipes(recipes);

    window.addEventListener('resize', function() {
        recipesContainer.innerHTML = '';
        displayRecipes(recipes);
    });
});
