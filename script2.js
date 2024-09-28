document.getElementById('exchangeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let itemType = document.getElementById('itemType').value;
    let exchangeType = document.getElementById('exchangeType').value;
    let description = document.getElementById('description').value;

    // Create item object
    let item = {
        name: name,
        email: email,
        itemType: itemType,
        exchangeType: exchangeType,
        description: description
    };

    // Save to localStorage or show on page
    let items = JSON.parse(localStorage.getItem('exchangeItems')) || [];
    items.push(item);
    localStorage.setItem('exchangeItems', JSON.stringify(items));

    // Update the list on the page
    displayItems();
});

function displayItems() {
    let items = JSON.parse(localStorage.getItem('exchangeItems')) || [];
    let itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear the current list
    items.forEach(function (item, index) {
        itemList.innerHTML += `<li>
        <strong>${item.itemType}</strong> (${item.exchangeType}) by ${item.name} 
        <br>Contact: <a href="mailto:${item.email}">${item.email}</a>
        <br>Description: ${item.description}
      </li>`;
    });
}

// On page load, display stored items
window.onload = displayItems;
