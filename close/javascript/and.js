let shoppingCart = document.getElementById('shopping-cart');

document.getElementById('cart-btn').onclick = () =>{
  if (shoppingCart.style.display === "none") {
    shoppingCart.style.display = "block";
  } else {
    shoppingCart.style.display = "none";
  }
}
