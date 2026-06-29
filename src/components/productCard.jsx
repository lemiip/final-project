import {useContext} from "react";
import {CartContext} from "../context/CartContext";


function ProductCard({product}){


const {addToCart}=useContext(CartContext);



return (

<div>


<img src={product.image}/>


<h2>
{product.brand}
</h2>


<p>
{product.title}
</p>


<p>
${product.price}
</p>


<button
onClick={()=>addToCart(product)}
>
Add to Cart
</button>


</div>


)


}

export default ProductCard;