import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import { FREE_GIFT, PRODUCTS, THRESHOLD } from '../data'

function App() {
const [cart,setCart]=useState([])
const addToCart=(product,quantity)=>{
  setCart((prevCart)=>{
    const existingItem= prevCart.find((item)=>item.id === product.id);
    if(existingItem){
      return prevCart.map((item)=>
      item.id === product.id ?{...item,quantity:item.quantity+quantity}:item);
    }
    return[...prevCart,{...product,quantity}];
  })
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
    <h1>Shopping Cart</h1>
  <ProgressBar subtotal={subtotal}/>
  <ProductList products={PRODUCTS} addToCart={addToCart} />
  <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>

  </div>
  )
}

export default App
