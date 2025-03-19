import React,{useState} from "react";
import "../App.css"

const ProductList=({products,addToCart})=>{
    const [quanties,setQuantities]=useState({})
    const handleQuantityChange=(id,amount)=>{
        setQuantities((prev)=>({
...prev,[id]:Math.max(1,(prev[id]||1)+amount)
        }));
    }
    return(
        <div className="product-list">
            <h2>Products</h2>

            {products.map((product)=>(<div>
              <div id={product.id} className="product">
                <span>{product.name}-{product.price}</span>
                <div className="quantity-selector">
                    <button onClick={()=>handleQuantityChange(product.id,-1)}>
                        -
                    </button>
                    <button onClick={()=>handleQuantityChange(product.id,+1)}>
                        +
                    </button>

                </div>
                <div onClick={()=>addToCart(product,quanties[product.id])}>Add to cart</div>
                </div>
                </div>))}
            Produ
        </div>
    )
}
export default ProductList