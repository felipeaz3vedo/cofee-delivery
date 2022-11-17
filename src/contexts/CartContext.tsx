import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CofeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffe: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storeddCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storeddCartItems) return JSON.parse(storeddCartItems);

    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeAlreadyExistOnCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, draft => {
      coffeeAlreadyExistOnCart < 0
        ? draft.push(coffee)
        : (draft[coffeeAlreadyExistOnCart].quantity += coffee.quantity);
    });

    setCartItems(newCart);
  };

  const changeCartItemQuantity = (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => {
    const newCart = produce(cartItems, draft => {
      const coffeeExistsInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];

        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  };

  const removeCartItem = (cartItemId: number) => {
    const newCart = produce(cartItems, draft => {
      const coffeeExistsInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      );

      coffeeExistsInCart >= 0 && draft.splice(coffeeExistsInCart, 1);
    });

    setCartItems(newCart);
  };

  const cleanCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsTotal,
        cartQuantity,
        changeCartItemQuantity,
        addCoffeeToCart,
        removeCartItem,
        cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
