import {useEffect, useState} from "react";


function Notice(){

const [notices,setNotices] = useState([]);


useEffect(()=>{

fetch("/notices/notices.json")
.then(res=>res.json())
.then(data=>setNotices(data))

},[]);



return(

<section className="
border-y
border-gray-200
py-8
px-16
">


<div className="
flex
items-center
gap-20
">


<h2 className="
text-3xl
font-bold
">
Notice
</h2>



<div className="flex-1">


{
notices.map(item=>(

<div
key={item.id}
className="
flex
justify-between
items-center
py-3
border-b
border-gray-100
"
>


<a
href="#"
className="
text-gray-600
text-lg
hover:underline
"
>
{item.title}
</a>



<div className="
flex
items-center
gap-10
">

<span className="text-gray-500">
{item.date}
</span>


<a href="#" className="text-3xl">
+
</a>


</div>


</div>


))
}


</div>


</div>


</section>

)

}


export default Notice;