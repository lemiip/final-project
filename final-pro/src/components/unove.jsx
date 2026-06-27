import React from "react";
import { useEffect, useState } from "react";
function Unove(){
    const[unove,setUnove]=useState([])
    useEffect(()=>{
        fetch("/unove/unove.json")
        .then(res=>res.json())
        .then(data=>setUnove(data))
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
grid-cols-5
gap-5
mx-3
">




<div className="
col-span-2
">

<video
 src={brand.video}
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
src={product.image}
className="
w-[200px]
h-[180px]
object-fill
"
/>



<h3 className="
mt-5
font-medium
line-clamp-2
">
{product.name}
</h3>



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