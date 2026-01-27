export const cart = [];

export const addToCart = (productId) => {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`,
  );

  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }

  quantitySelector.value = "1";
};
