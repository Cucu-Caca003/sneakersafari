const orderButton = document.querySelector(".order-btn");
const wishlistButton = document.querySelector(".wishlist-btn"); 
const orderButton2 = document.querySelector(".order-btn2");
const wishlistButton2 = document.querySelector(".wishlist-btn2");
const orderButton3 = document.querySelector(".order-btn3");
const wishlistButton3 = document.querySelector(".wishlist-btn3");
const orderButton4 = document.querySelector(".order-btn4");
const wishlistButton4 = document.querySelector(".wishlist-btn4");
const searchForm = document.querySelector(".search-form");
const searchInput = document.getElementById("search-input");

function handleButtonClick(button) {
  const buttonText = button.textContent.trim(); 

  if (buttonText === "Order") {
    alert("Your item has been ordered!"); 
  } else if (buttonText === "Wishlist") {
    alert("You item has been added to Wishlist!");
  }
}

orderButton.addEventListener("click", () => handleButtonClick(orderButton));
wishlistButton.addEventListener("click", () =>
  handleButtonClick(wishlistButton)
);

function handleButtonClick(button) {
  const buttonText = button.textContent.trim();

  if (buttonText === "Order") {
    alert("Your item has been ordered!");
  } else if (buttonText === "Wishlist") {
    alert("You item has been added to Wishlist!");
  }
}

orderButton2.addEventListener("click", () => handleButtonClick(orderButton2));
wishlistButton2.addEventListener("click", () =>
  handleButtonClick(wishlistButton2)
);

function handleButtonClick(button) {
  const buttonText = button.textContent.trim();

  if (buttonText === "Order") {
    alert("Your item has been ordered!");
  } else if (buttonText === "Wishlist") {
    alert("You item has been added to Wishlist!");
  }
}

orderButton3.addEventListener("click", () => handleButtonClick(orderButton3));
wishlistButton3.addEventListener("click", () =>
  handleButtonClick(wishlistButton3)
);



function handleButtonClick(button) {
  const buttonText = button.textContent.trim();

  if (buttonText === "Order") {
    alert("Your item has been ordered!");
  } else if (buttonText === "Wishlist") {
    alert("You item has been added to Wishlist!");
  }
}

orderButton4.addEventListener("click", () => handleButtonClick(orderButton4));
wishlistButton4.addEventListener("click", () =>
  handleButtonClick(wishlistButton4)
);




searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();
  const searchResults = document.querySelectorAll("p, h1, h2, h3");
  let resultsFound = false;

  for (const element of searchResults) {
    if (element.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
      element.style.backgroundColor = "#FF3434";
      resultsFound = true;
    } else {
      element.style.backgroundColor = "";
    }
  }

  if (!resultsFound) {
    alert("No results found.");
  }
});