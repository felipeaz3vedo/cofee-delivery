import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CofeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffe: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
