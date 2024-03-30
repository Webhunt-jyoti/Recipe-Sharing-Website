// Dummy data for autocomplete suggestions
let slideIndex = 0;

const recipes = [
  "Pasta Carbonara",
  "Chicken Tikka Masala",
  "Tacos",
  "Chocolate Cake",
  "Caesar Salad",
  "Spaghetti Bolognese",
  "Sushi Rolls",
  "Ratatouille",
  "Margarita Pizza",
  "Apple Pie"
];

// Get DOM elements
const searchBar = document.getElementById('search-bar');
const autocompleteContainer = document.querySelector('.autocomplete');
const cuisineTypeSelect = document.getElementById('cuisine-type');
const mealTypeSelect = document.getElementById('meal-type');
const applyFiltersBtn = document.getElementById('apply-filters');

// Function to show autocomplete suggestions
function showAutocompleteSuggestions(input) {
  // Clear previous suggestions
  autocompleteContainer.innerHTML = '';

  // Filter recipes based on input
  const filteredRecipes = recipes.filter(recipe =>
    recipe.toLowerCase().includes(input.toLowerCase())
  );

  // Display suggestions
  filteredRecipes.forEach(recipe => {
    const suggestion = document.createElement('div');
    suggestion.classList.add('suggestion');
    suggestion.textContent = recipe;
    suggestion.addEventListener('click', () => {
      searchBar.value = recipe;
      autocompleteContainer.innerHTML = '';
    });
    autocompleteContainer.appendChild(suggestion);
  });

  // Show autocomplete container
  autocompleteContainer.style.display = filteredRecipes.length ? 'block' : 'none';
}

// Event listeners
searchBar.addEventListener('input', () => {
  showAutocompleteSuggestions(searchBar.value);
});

// Event listener to hide autocomplete container when clicking outside
document.addEventListener('click', (event) => {
  if (!autocompleteContainer.contains(event.target) && event.target !== searchBar) {
    autocompleteContainer.style.display = 'none';
  }
});

// Function to apply filters
function applyFilters() {
  const cuisineType = cuisineTypeSelect.value;
  const mealType = mealTypeSelect.value;
  
  // Perform filtering based on selected options (dummy functionality for demonstration)
  console.log('Filters applied:');
  console.log('Cuisine Type:', cuisineType);
  console.log('Meal Type:', mealType);
}

applyFiltersBtn.addEventListener('click', applyFilters);

// ----------------------------------------------------------------------------
  // Get DOM element for filter section
const filterSection = document.querySelector('.filters');


// Function to toggle filter section visibility
function toggleFilterSection() {
  if (filterSection.style.display === 'block') {
    filterSection.style.display = 'none';
  } else {
    filterSection.style.display = 'block';
  }
}

// Event listener for clicking on filter option
document.getElementById('filter-option-toggle').addEventListener('click', toggleFilterSection);
document.getElementById('apply-filters').addEventListener('click',()=>{
  filterSection.style.display = 'none';
});
// ------------------------------------------------------------------------------------------------------
// JavaScript code for interactive elements

// Function to handle submitting comments
document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const commentInput = document.getElementById('comment-input');
  const comment = commentInput.value.trim();
  if (comment !== '') {
    // Create new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = comment;
    // Add new comment to comments section
    document.querySelector('.comments').appendChild(newComment);
    // Clear comment input field
    commentInput.value = '';
  }
});

// Function to handle sorting by ratings
document.getElementById('sort-highest').addEventListener('click', function() {
  // Sort recipes by highest ratings
  // Implement sorting logic here
});

document.getElementById('sort-lowest').addEventListener('click', function() {
  // Sort recipes by lowest ratings
  // Implement sorting logic here
});
// ---------------------
// Dummy data for recipes with ratings
const recipesData = [
  { title: "Pasta Carbonara", rating: 4.5 },
  { title: "Chicken Tikka Masala", rating: 4.2 },
  { title: "Tacos", rating: 4.8 },
  { title: "Chocolate Cake", rating: 4.7 },
  { title: "Caesar Salad", rating: 4.3 },
  { title: "Spaghetti Bolognese", rating: 4.6 },
  { title: "Sushi Rolls", rating: 4.9 },
  { title: "Ratatouille", rating: 4.4 },
  { title: "Margarita Pizza", rating: 4.1 },
  { title: "Apple Pie", rating: 4.0 }
];

// Function to display recipes with ratings
function displayRecipes() {
  const recipeContainer = document.querySelector('.recipe');
  recipeContainer.innerHTML = '';

  recipesData.forEach(recipe => {
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe-item');
    recipeElement.innerHTML = `
      <h2>${recipe.title}</h2>
      <div class="rating">Rating: ${recipe.rating.toFixed(1)}</div>
      <button class="like-btn">Like</button>
      <button class="dislike-btn">Dislike</button>
      <button id="share-facebook">
      <svg class="fb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
      </button>

      <button id="share-instagram">Share on Facebook</button>
      <div class="comments">

      </div>
      <form id="comment-form">
      <input type="text" id="comment-input" placeholder="Leave a comment...">
      <button type="submit">Submit</button>
    </form>
      
    `;
    recipeContainer.appendChild(recipeElement);
  });

  // Add event listeners for like and dislike buttons
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const recipeTitle = btn.parentElement.querySelector('h2').textContent;
      rateRecipe(recipeTitle, true);
    });
  });

  document.querySelectorAll('.dislike-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const recipeTitle = btn.parentElement.querySelector('h2').textContent;
      rateRecipe(recipeTitle, false);
    });
  });
}

// Function to rate a recipe (like or dislike)
function rateRecipe(recipeTitle, isLiked) {
  const recipe = recipesData.find(recipe => recipe.title === recipeTitle);
  if (recipe) {
    if (isLiked) {
      recipe.rating += 0.1; // Increase rating for like
    } else {
      recipe.rating -= 0.1; // Decrease rating for dislike
    }
    // Update the display
    displayRecipes();
  }
}

// Function to sort recipes by ratings
function sortRecipesByRating(highestFirst = true) {
  if (highestFirst) {
    recipesData.sort((a, b) => b.rating - a.rating);
  } else {
    recipesData.sort((a, b) => a.rating - b.rating);
  }
  // Update the display
  displayRecipes();
}

// Event listener for sorting buttons
document.getElementById('sort-highest').addEventListener('click', () => {
  sortRecipesByRating(true);
});

document.getElementById('sort-lowest').addEventListener('click', () => {
  sortRecipesByRating(false);
});

// Display recipes initially
displayRecipes();

// JavaScript code for Recipe Sharing Website

// Dummy data for comments
const commentsData = [
 
 
];


// Function to display comments
function displayComments() {
  const commentList = document.querySelector('.comments');
  commentList.innerHTML = '';
  
  commentsData.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
  });
}

// Event listener for submitting comments
document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const commentInput = document.getElementById('comment-input');
  const comment = commentInput.value.trim();
  if (comment !== '') {
    commentsData.push(comment); // Add comment to data
    displayComments(); // Update display
    commentInput.value = ''; // Clear comment input field
  }
});

// Event listeners for sharing on Facebook and Twitter
document.getElementById('share-facebook').addEventListener('click', ()=> {
  // Implement sharing on Facebook (you can replace this with actual sharing functionality)
  alert('Sharing on Facebook...');
});

document.getElementById('share-twitter').addEventListener('click', function() {
  // Implement sharing on Twitter (you can replace this with actual sharing functionality)
  alert('Sharing on Twitter...');
});

// Display comments initially
displayComments();

// community feature ----------------------------------
// Dummy data for chefs/contributors
const chefsData = [
  { id: 1, name: 'Chef 1' },
  { id: 2, name: 'Chef 2' },
  { id: 3, name: 'Chef 3' }
];

// Function to populate the chef list and select options
function populateChefListAndSelect() {
  const chefList = document.getElementById('chef-list');
  const chefSelect = document.getElementById('chef-select');
  
  chefsData.forEach(chef => {
    const listItem = document.createElement('li');
    listItem.textContent = chef.name;
    chefList.appendChild(listItem);
    
    const option = document.createElement('option');
    option.value = chef.id;
    option.textContent = chef.name;
    chefSelect.appendChild(option);
  });
}

// Event listener for viewing recipes of a selected chef
document.getElementById('view-recipes-btn').addEventListener('click', function() {
  const chefSelect = document.getElementById('chef-select');
  const selectedChefId = chefSelect.value;
  // Implement logic to view recipes of the selected chef
  alert(`Viewing recipes of Chef with ID: ${selectedChefId}`);
});

// Event listener for engaging with the community
document.getElementById('engage-btn').addEventListener('click', function() {
  // Implement logic for community engagement
  alert('Engaging with the community...');
});

// Populate chef list and select options initially
populateChefListAndSelect();


// -------------------------------------------------------------------------------





// Function to show slides
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
