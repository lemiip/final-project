import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
function Unove({ onAddToCart }){
    const[unove,setUnove]=useState([])
    useEffect(()=>{
        fetchPublicJson("/unove/unove.json")
        .then(data=>setUnove(data))
        .catch(()=>setUnove([]))
    },[])
    return(
        <div>

{
unove.map(brand=>(

<div 
key={brand.id}
className="
bg-gray-100
p-8
mt-6
"
>


<h2 className="
text-3xl
font-bold
mb-10
mx-2
mt-5
">
{brand.title}
</h2>



<div className="
grid
grid-cols-1
lg:grid-cols-5
gap-5
mx-3
">




<div className="
lg:col-span-2
">

<video
 src={publicUrl(brand.video)}
  controls
  className="
    w-full
    h-[370px]
    object-cover
  "
/>

</div>





{
brand.products.map(product=>(


<div
key={product.id}
className="
bg-white
rounded-xl
overflow-hidden
shadow-sm
p-3
"
>


<img
src={publicUrl(product.image)}
className="
w-full
h-[180px]
object-fill
"
/>



<div className="mt-5 flex items-start justify-between gap-3">
<h3 className="
font-medium
line-clamp-2
">
{product.name}
</h3>
<button
type="button"
className="text-xl text-gray-400 hover:text-red-500"
aria-label="Add to cart"
title="Add to cart"
onClick={() => onAddToCart({
  id: `${brand.title}-${product.id}`,
  source: brand.title,
  title: product.name,
  text: brand.title,
  image: product.image,
  discount: product.discount,
  price: product.price,
})}
>
<HiOutlineShoppingBag />
</button>
</div>



<p className="
mt-4
text-gray-400
line-through
">
{product.discount}
</p>



<p className="
text-red-500
font-bold
text-xl
mt-3
">
{product.price}
</p>


</div>


))

}



</div>


</div>


))

}

</div>

    )
}
export default Unove
