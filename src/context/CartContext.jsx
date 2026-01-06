import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Add product
    const addProduct = (product) => { // product => new value
        setCart((prev) => { // setCart => old value

            // Existing Product
            const existingProduct = prev.find((item) => item.id === product.id);

            // condition
            if(existingProduct){
                // const product = [{id:1, name:"laptop", price:800, qty:1}];
                // const a = {id:1}
                // const updatedProduct =product.map((item) => {
                //     return item.id === a.id ? {...item, qty: item.qty + 1} : item 
                // })
                // console.log(updatedProduct);

                return prev.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : item);

            }

            // Not Existing Product
            return [...prev, {...product, qty: 1} ]

        })
    }

    return (
        <CartContext.Provider value={{cart, setCart, addProduct}}> 
            {children} {/* bas children j hal se */}
        </CartContext.Provider>
    )
    
}

// Custom Hook
const useCart = () => useContext(CartContext);


export {CartProvider, useCart} 