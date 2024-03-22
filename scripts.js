// Sample recipe data (can be replaced with actual data from a database)
const recipes = [
    {
        id: 1,
        title: "Pasta Carbonara",
        ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
        instructions: "Boil spaghetti until al dente. Cook bacon until crispy. In a bowl, whisk together eggs and Parmesan cheese. Drain spaghetti and add it to the egg mixture. Stir in bacon and black pepper. Serve immediately."
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        ingredients: ["Butter", "Brown Sugar", "White Sugar", "Egg", "Vanilla Extract", "Flour", "Baking Soda", "Salt", "Chocolate Chips"],
        instructions: "Cream together butter, brown sugar, and white sugar. Beat in egg and vanilla extract. In a separate bowl, combine flour, baking soda, and salt. Gradually add dry ingredients to the wet ingredients. Stir in chocolate chips. Drop dough by spoonfuls onto a baking sheet. Bake at 350°F (175°C) for 8 to 10 minutes."
    }
];

// Function to display recipes
function displayRecipes(recipesArray, containerId) {
    const recipeList = document.getElementById(containerId);
    recipeList.innerHTML = '';

    recipesArray.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <button class="view-details-btn" data-id="${recipe.id}">View Details</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Function to display recipe details in modal
function displayRecipeDetails(recipeId) {
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (recipe) {
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h2>${recipe.title}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        const modal = document.getElementById('recipe-modal');
        modal.style.display = "block";
    }
}

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close modal when user clicks on close button
const closeModal = document.querySelector('.close');
if (closeModal) {
    closeModal.onclick = function() {
        const modal = document.getElementById('recipe-modal');
        modal.style.display = "none";
    }
}

// Display featured recipes
displayRecipes(recipes.slice(0, 3), 'featured-recipes');

// Display latest recipes
displayRecipes(recipes.slice(0, 5), 'recipe-list');

// Add event listener to view details button to display recipe details in modal
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const recipeId = parseInt(button.getAttribute('data-id'));
        displayRecipeDetails(recipeId);
    });
});
