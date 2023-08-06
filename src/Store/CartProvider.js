import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      Number(state.totalAmount) + Number(action.item.price);
    const itemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );
    let updatedItems;

    if (itemIndex !== -1) {
      updatedItems = [...state.items];
      const updateItem = { ...updatedItems[itemIndex] };
      updateItem.quantity++;
      updatedItems[itemIndex] = updateItem;
    } else {
      const updateItem = {
        ...action.item,
        quantity: 1,
      };
      updatedItems = [...state.items];
      updatedItems.push(updateItem);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const updatedTotalAmount = state.totalAmount + Number(action.price);
    const itemIndex = state.Items.findIndex(
      (item) => item.title === action.title
    );

    const item = state.items[itemIndex];
    let updatedItems;

    if (item) {
      const updatedItem = {
        ...item,
        quantity: Number(item.quantity) - Number(action.quantity),
      };
      updatedItems = [...state.Items];
      updatedItems[itemIndex] = updatedItem;
    }
    if (item.quantity === 0) {
      updatedItems.splice(itemIndex, 1);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

function CartProvider(props) {
  const [cartState, setCartState] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    setCartState({ type: "ADD", item: item });
  };

  const removeItemHandler = (title) => {
    setCartState({ type: "REMOVE", title: title });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
