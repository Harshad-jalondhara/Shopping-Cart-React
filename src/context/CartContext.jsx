import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart"); // data lave
    return saved ? JSON.parse(saved) : []; // string to => arrya and object
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); //save
  }, [cart])

  // Add Product
  const addProduct = (product) => {
    // product => new value
    setCart((prev) => {
      // setCart => old value

      // Existing Product
      const existingProduct = prev.find((item) => item.id === product.id);

      // condition
      if (existingProduct) {
        // const product = [{id:1, name:"laptop", price:800, qty:1}];
        // const a = {id:1}
        // const updatedProduct =product.map((item) => {
        //     return item.id === a.id ? {...item, qty: item.qty + 1} : item
        // })
        // console.log(updatedProduct);

        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      // Not Existing Product
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove Product
  const removeProduct = (id) => {
    setCart((prev) => {
       return prev.filter((item) => { 
         return   item.id !== id       // value (false) => item remove
        })
    })
  }

  // Update Quantity
    const updateQuantity = (id, qty) => {
        setCart((prev) => {
          return  prev.map((item) => (
                item.id === id ? {...item, qty} : item // { qty } value replay thay se 
            ))
        })
    }

  // Total 

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateQuantity, total }}
    >
      {" "}
      {/* Data bhejva mate CartProvider ni under batha tag nakha*/}
      {children} {/* bas children j hal se */}
    </CartContext.Provider>
  );
};

// Custom Hook
const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
