function CustomerService(){

return(

<section className="
grid
grid-cols-2
gap-20
px-16
py-16
items-center
">


<div>

<h2 className="
text-3xl
font-bold
mb-10
">
Customer Service
</h2>


<div className="
flex
gap-10
text-lg
mb-10
">

<span className="text-gray-500">
Email Address
</span>


<span>
oycs.global@cj.net
</span>


</div>



<div className="flex gap-3">


<button className="
border
border-lime-500
text-emerald-900
w-[200px]
h-[50px]
rounded
hover:bg-lime-100
text-xl
cursor-pointer
">
Contact Us
</button>


<button className="
border
border-lime-500
rounded
text-emerald-900
w-[200px]
h-[50px]
hover:bg-lime-100
cursor-pointer
text-xl
">
FAQs
</button>


</div>


</div>




<div>

<img
src="/bannerimg/dummy-main-customer.png"
className="
w-full
h-[300px]
object-fill
cursor-pointer
"
/>

</div>


</section>


)

}

export default CustomerService;