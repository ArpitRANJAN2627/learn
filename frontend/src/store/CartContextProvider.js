import React, { createContext,useEffect,useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const CartContext = createContext()

export const CartContextProvider = (props) => {

    const { user, isAuthenticated } = useAuth0();
    


    let str=props.cartname;
   
       
  
    const intialCart = JSON.parse(window.localStorage.getItem(str) || '[]');
    const [cart, setCart] = useState(intialCart);

    const addToCart = (item) => {

        const isPresent = cart.some((food) => food.id === item.id);

        if (isPresent) {
            setCart(() => {
                return cart.map((food) => food.id === item.id ? { ...food, qty: food.qty + 1 } : food);
            })   
        } else {
            setCart((prevState) => {
                return [...prevState, item];
            })
        }
    }

    const clearCart = () => {
        setCart(() => []);
    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart,
        clearCart:clearCart
    }

    useEffect(() => {
        window.localStorage.setItem(str,JSON.stringify(cart));
    }, [cart]);

    return (
        
        <CartContext.Provider value={context}>
            {props.children}
      </CartContext.Provider>
    
    )
}

export default CartContext;