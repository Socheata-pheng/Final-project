function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');

    // Dish arrays for each meal with image URLs
    const breakfastDishes = [
        { name: 'Rice Pork', img: 'Dish/ricePork.jpg'},
        { name: 'Nom Banh Chok', img: 'Dish/BanhChok.jpg' },
        { name: 'Banh Chew', img: 'Dish/BanhChew.jpg' },
        { name: 'Cambodian porridge', img: 'Dish/Congee.jpg' },
    ];
    const lunchDishes = [
        { name: 'Samlor Korko ', img: 'Dish/Korko.jpg' },
        { name: 'Amok Trey', img: 'Dish/Amok.jpg' },
        { name: 'Lok Lak beef', img: 'Dish/LokLak.jpg' },
        { name: 'Bee grill', img: 'Dish/Bee.jpg' },
    ];
    const dinnerDishes = [
        { name: 'Lort Cha', img: 'Dish/Lort.jpg' },
        { name: 'Grill Beef', img: 'Dish/Beef.jpg' },
        { name: 'Khor', img: 'Dish/Khor.jpg' },
        { name: 'Grill Chicken', img: 'Dish/Chicken.jpg' },
    ];

    // Clear previous displays
    document.getElementById('breakfast').style.display = 'none';
    document.getElementById('lunch').style.display = 'none';
    document.getElementById('dinner').style.display = 'none';

    // Show meals based on the current hour
    if (hours > 1 && hours < 12) {
        displayDishes('breakfast', breakfastDishes);
    } else if (hours >= 12 && hours < 19) {
        displayDishes('lunch', lunchDishes);
    } else if (hours >= 19 && hours < 24) {
        displayDishes('dinner', dinnerDishes);
    }

}

// // Ensure the DOM is fully loaded before running the script
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the h2 element within the lunch section
//     var lunchHeading = document.querySelector("#lunch h2");

//     // Check if the h2 element exists
//     if (lunchHeading) {
//         // Make sure the h2 is visible
//         lunchHeading.style.display = "block"; // Ensure it is displayed
//         lunchHeading.style.visibility = "visible"; // Ensure it is visible
//         lunchHeading.style.color = "#333"; // Set color if needed
//     }
// });

function displayDishes(mealType, dishes) {
    const mealItem = document.getElementById(mealType);
    mealItem.style.display = 'block';
    
    // Clear previous dishes
    const mealList = document.getElementById('mealItem');
    mealList.innerHTML = '';

    // Create a container for the dishes
    const dishContainer = document.createElement('div');
    dishContainer.className = 'meal-container'; // Add the CSS class for styling
    mealList.appendChild(dishContainer);

    // Display dishes with images
    dishes.forEach((dish, index) => {
        if (index < 4) { // Show 4 dishes
            const dishElement = document.createElement('div');
            dishElement.className = 'dish-element'; // Add the CSS class for styling

            const dishName = document.createElement('div');
            dishName.textContent = dish.name;
            dishElement.appendChild(dishName);

            // Create and append the dish image
            const dishImage = document.createElement('img');
            dishImage.src = dish.img; // Set the source to the image URL
            dishImage.alt = dish.name; // Set alt text for the image
            dishElement.appendChild(dishImage);

            // Append the dish element to the container
            dishContainer.appendChild(dishElement);
        }
    });
}
updateTime();
