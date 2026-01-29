export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: "2",
    },
  ];
}

const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

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
      deliveryOptionId: "1",
    });
  }

  quantitySelector.value = "1";
  saveToStorage();
};

export const removeFromCart = (productId) => {
  // const newCart = [];
  // cart.forEach((cartItem) => {
  //   if (cartItem.productId !== productId) {
  //     newCart.push(cartItem);
  //   }
  // });

  // cart = newCart;
  // saveToStorage();

  const newCart = cart.filter((item) => item.productId !== productId);
  cart = newCart;
  saveToStorage();
};

export const calculateCartQuantity = () => {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
};

// export const updateQuantity = (productId, newQuantity) => {
//   cart.forEach((cartItem) => {
//     if (cartItem.productId === productId) {
//       cartItem.quantity = newQuantity;
//       saveToStorage();

//       const quantityLabel = document.querySelector(
//         `.js-cart-item-container-${productId} .quantity-label`,
//       );
//       if (quantityLabel) {
//         quantityLabel.textContent = newQuantity;
//       }
//     }
//   });
// };

export const updateQuantity = (productId, newQuantity) => {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;
  saveToStorage();
};

export const updateDeliveryOption = (productId, deliveryOptionId) => {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
};
