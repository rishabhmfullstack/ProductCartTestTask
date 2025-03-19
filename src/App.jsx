import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { FREE_GIFT, PRODUCTS, THRESHOLD } from '../data'

function App() {
const [cart,setCart]=useState([])
const addToCart = (product, quantity = 1) => {
  if (!quantity || isNaN(quantity)) {
    quantity = 1; 
  }

  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);
    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }
    return [...prevCart, { ...product, quantity }];
  });
};

const updateQuantity=(id,quantity)=>{
  if(quantity === 0){
    removeFromCart(id);
    return
  }
setCart((prevCart)=>prevCart.map((item)=>(item.id === id ? {...item,quantity}:item)))
}
const removeFromCart=(id)=>{
setCart((prevCart)=> prevCart.filter((item)=> item.id !== id));
}
useEffect(()=>{
  const subtotal =cart.reduce((sum,item)=>sum + item.price* item.quantity,0);
  const hasGift =cart.some((item)=> item.id === FREE_GIFT.id);
  if(subtotal>= THRESHOLD && !hasGift){
    setCart((prevCart)=>[...prevCart,{...FREE_GIFT,quantity:1}]);
  }else if (subtotal< THRESHOLD && hasGift){
    setCart((prevCart)=>prevCart.filter((item)=>item.id !== FREE_GIFT.id))
  }

},[cart])
const subtotal =cart.reduce((sum,item)=>sum + item.price* item.quantity,0);
  return (
  <div className='app'>
    <h1>Product List</h1>
  <ProductList products={PRODUCTS} addToCart={addToCart} />
  <div className='card-bundle'><ProgressBar subtotal={subtotal}/> 
  <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
  </div>
 

  </div>
  )
}

export default App
