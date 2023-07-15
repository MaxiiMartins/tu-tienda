import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (cart.length >= 0) {
      const acumuladores = cart.reduce(((acumulador, producto) => ({
        cantidad: acumulador.cantidad + producto.amount,
        precio: acumulador.precio + (producto.amount *producto.price )
      })), { cantidad: 0, precio: 0 })
      setTotal(acumuladores.precio)
      setItemAmount(acumuladores.cantidad)
    }
  }, [cart])


  const agregarAlCarrito = (producto) => {
    if (cart.length === 0) {
      setCart([{ ...producto, amount: 1 }])
    }
    else {
      const cartItem = cart.find((item) => item.id === producto.id)
      if (cartItem) {
        const newCart = [...cart].map((item) => item.id === cartItem.id ? { ...item, amount: cartItem.amount + 1 } : item)
        setCart(newCart)
      } else {
        setCart([...cart, { ...producto, amount: 1 }])
      }
    }
  }

  const removerDelCarrito = (id) => setCart(cart.filter(item => item.id !== id))
  const vaciarCarrito = () => setCart([])

  const incrementarProducto = (id) => {
    const cartItem = cart.find(item => item.id === id)
    cartItem && agregarAlCarrito(cartItem)
  }
  const decrementarProducto = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    if (cartItem) {
      if (cartItem.amount <= 1) {
        removerDelCarrito(id)
      }
      else {
        const newCart = [...cart].map((item) => item.id === cartItem.id ? { ...item, amount: cartItem.amount - 1 } : item)
        setCart(newCart)
      }
    }
  }
  return <CartContext.Provider value={{ cart, agregarAlCarrito, removerDelCarrito, vaciarCarrito, incrementarProducto, decrementarProducto, itemAmount,total }} >{children}</CartContext.Provider>;
};

export default CartProvider;
