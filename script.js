// Function to increment the count of items or times worn
function increment(id) {
    const element = document.getElementById(id);
    let currentValue = parseInt(element.textContent);
    element.textContent = currentValue + 1;
}

// Function to decrement the count of items
function decrement(id) {
    const element = document.getElementById(id);
    let currentValue = parseInt(element.textContent);
    if (currentValue > 0) {
        element.textContent = currentValue - 1;
    }
}

function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}




