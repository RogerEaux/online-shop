function cartItemsReducer(cartItems, action) {
  switch (action.type) {
    case 'add_item': {
      const targetItemIndex = cartItems.findIndex(
        (item) => item.id === action.item.id,
      );
      if (targetItemIndex !== -1) {
        const newCartItems = cartItems.map((item, index) => {
          if (index === targetItemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });

        return newCartItems;
      }

      return [...cartItems, action.item];
    }

    case 'delete_item': {
      return cartItems.filter((item) => item.id !== action.targetId);
    }

    case 'plus_item': {
      const targetItemIndex = cartItems.findIndex(
        (item) => item.id === action.targetId,
      );
      const newCartItems = cartItems.map((item, index) => {
        if (index === targetItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      return newCartItems;
    }

    case 'minus_item': {
      const targetItemIndex = cartItems.findIndex(
        (item) => item.id === action.targetId,
      );

      if (cartItems[targetItemIndex].quantity !== 1) {
        const newCartItems = cartItems.map((item, index) => {
          if (index === targetItemIndex) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        });

        return newCartItems;
      }

      return cartItems.filter((item) => item.id !== action.targetId);
    }

    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

export default cartItemsReducer;
