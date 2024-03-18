var addToCartButtons = document.getElementsByClassName("addToCartButton");

for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
    var popup = this.nextElementSibling;
    popup.style.display = "block";
  });
}

document.addEventListener("click", function(event) {
  if (event.target.matches(".exitButton")) {
    var popup = event.target.closest(".popup");
    popup.style.display = "none";
  }
});

document.addEventListener("click", function(event) {
  if (event.target.matches(".btn-purchase")) {
    var popup = event.target.closest(".popup");
    // Perform checkout or further processing here
    popup.style.display = "none";
  }
});

var productImages = document.getElementsByClassName("product-image");

for (var i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener("click", function(event) {
    event.stopPropagation();
    this.classList.toggle("selected");
  });
}
