import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function NavMenu(){
    return(
        <div className="relative">
            <div className="flex items-center justify-between mx-7 font-bold text-[16px]">
                <ul className="flex gap-4 items-center cursor-pointer">
                    <li className="text-[23px] hover:text-lime-500 transition-colors duration-300 group relative"><a href="#"><RxHamburgerMenu /></a>
                     <div
    className="
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto

    absolute
    top-8
    left-0
   transition-all
duration-300
delay-200
    w-[1200px]
    bg-white
    shadow-xl

    z-50

    p-10

    text-black
    "
    >


        <div className="grid grid-cols-5 gap-10">


            <div>

                <h2 className="text-lg font-bold mb-4">
                    All Categories
                </h2>
                <div className="border-b border-gray-200 w-[400px] "></div>
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Skincare</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Bath & Body</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Face Masks </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Suncare </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">K-POP </a>
                    </li>

                </ul>

            </div>

 <div className="py-5">

               

                <ul className="space-y-3 text-base py-7">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup Brush & Tools</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Accessories</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Welness</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Men's Care</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Supplements</a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Food & Drink </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Special Value Sets </a>
                    </li>

                </ul>

            </div>


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Trend Keyword
                </h2>
                <div className="border-b border-gray-200 w-[200px] "></div>

                <ul className="space-y-4 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Vegan</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Clean Beauty</a>
                    </li>

                </ul>


            </div>



            <div>

                <img 
                src="/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    OY Magazine 🎥
                </p>

            </div>



            <div>

                <img 
                src="/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    Rising Brand Week 💜
                </p>

            </div>


        </div>


    </div>
                    </li>
                    <li className="text-red-400 font-bold text-[16px] relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">OY EXCLUSIVE</a></li>
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">Best</a></li>
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">New</a></li>
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">Sale</a></li>
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">Brands</a></li>
                    <li className="w-px h-5 bg-gray-300 mx-2" aria-hidden="true"></li>
                    <li className="hover:text-lime-500 transition-colors duration-300  group"><a href="#">Skincare</a>
    <div
    className="
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto

    absolute
    top-8
    left-0
    right-0
    mx-auto
    transition-all
    duration-300
    delay-200
    w-[1200px]
    bg-white
    shadow-xl

    z-50

    p-10

    text-black
    "
    >


        <div className="grid grid-cols-5 gap-10">


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Skincare Product
                </h2>
                <div className="border-b border-gray-200 w-[400px] "></div>
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Skincare</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Bath & Body</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Face Masks </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Suncare </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">K-POP </a>
                    </li>

                </ul>

            </div>

 <div className="py-5">

               

                <ul className="space-y-3 text-base py-7">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup Brush & Tools</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Accessories</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Welness</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Men's Care</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Supplements</a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Food & Drink </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Special Value Sets </a>
                    </li>

                </ul>

            </div>


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Trend Keyword
                </h2>
                <div className="border-b border-gray-200 w-[200px] "></div>

                <ul className="space-y-4 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Vegan</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Clean Beauty</a>
                    </li>

                </ul>


            </div>



            <div>

                <img 
                src="/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    OY Magazine 🎥
                </p>

            </div>



            <div>

                <img 
                src="/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    Rising Brand Week 💜
                </p>

            </div>


        </div>


    </div>
  
  </li>
                    <li className="hover:text-lime-500 transition-colors duration-300
  group"><a href="#">Makeup</a>
  <div
    className="
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto

    absolute
    top-8
    left-0
    right-0
    mx-auto
    transition-all
    duration-300
    delay-200
    w-[1200px]
    bg-white
    shadow-xl

    z-50

    p-10

    text-black
    "
    >


        <div className="grid grid-cols-5 gap-10">


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Skincare Product
                </h2>
                <div className="border-b border-gray-200 w-[400px] "></div>
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Skincare</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Bath & Body</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Face Masks </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Suncare </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">K-POP </a>
                    </li>

                </ul>

            </div>

 <div className="py-5">

               

                <ul className="space-y-3 text-base py-7">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup Brush & Tools</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Accessories</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Welness</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Men's Care</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Supplements</a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Food & Drink </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Special Value Sets </a>
                    </li>

                </ul>

            </div>


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Trend Keyword
                </h2>
                <div className="border-b border-gray-200 w-[200px] "></div>

                <ul className="space-y-4 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Vegan</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Clean Beauty</a>
                    </li>

                </ul>


            </div>



            <div>

                <img 
                src="/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    OY Magazine 🎥
                </p>

            </div>



            <div>

                <img 
                src="/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    Rising Brand Week 💜
                </p>

            </div>


        </div>


    </div>
  
  </li>
                    <li className=" hover:text-lime-500 transition-colors duration-300

  group"><a href="#">Hair</a>
  <div
    className="
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto

    absolute
    top-8
    left-1/2
    -translate-x-1/2
    transition-all
    duration-300
    delay-200
    w-[1200px]
    bg-white
    shadow-xl

    z-50

    p-10

    text-black
    "
    >


        <div className="grid grid-cols-5 gap-10">


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Hair Product
                </h2>
                <div className="border-b border-gray-200 w-[400px] "></div>
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">All Hair</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair Wash</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Treatments</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair Color & Perms</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair Styling </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair Styling Devices </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair Perfume </a>
                    </li>

                </ul>

            </div>

 <div className="">

              

                 <div>

                <h2 className="text-lg font-bold mb-4">
                    Hair Type
                </h2>
                
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Colored</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Curly & Wavy</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Dry</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Fine</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Greying </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair loss </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Weakened </a>
                    </li>

                </ul>

            </div>
            </div>


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Hair Care Benefit
                </h2>
                <div className="border-b border-gray-200 w-[200px] "></div>

                <ul className="space-y-4 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Anti-Dandruff</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Anti-Frizz</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Balancing</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Color Protection</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Damage Repair</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair Growth</a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hydrating</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Scalp Treatment</a>
                    </li>

                </ul>


            </div>



            <div>

                <img 
                src="/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    OY Magazine 🎥
                </p>

            </div>



            <div>

                <img 
                src="/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    Rising Brand Week 💜
                </p>

            </div>


        </div>


    </div>
  </li>
                    <li className="hover:text-lime-500 transition-colors duration-300
  
  group"><a href="#">Face Masks</a>
  <div
    className="
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto

    absolute
    top-8
    left-0
    right-0
    mx-auto
    transition-all
    duration-300
    delay-200
    w-[1200px]
    bg-white
    shadow-xl

    z-50

    p-10

    text-black
    "
    >


        <div className="grid grid-cols-5 gap-10">


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Skincare Product
                </h2>
                <div className="border-b border-gray-200 w-[400px] "></div>
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Skincare</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Bath & Body</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Face Masks </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Suncare </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">K-POP </a>
                    </li>

                </ul>

            </div>

 <div className="py-5">

               

                <ul className="space-y-3 text-base py-7">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup Brush & Tools</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Accessories</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Welness</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Men's Care</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Supplements</a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Food & Drink </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Special Value Sets </a>
                    </li>

                </ul>

            </div>


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Trend Keyword
                </h2>
                <div className="border-b border-gray-200 w-[200px] "></div>

                <ul className="space-y-4 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Vegan</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Clean Beauty</a>
                    </li>

                </ul>


            </div>



            <div>

                <img 
                src="/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    OY Magazine 🎥
                </p>

            </div>



            <div>

                <img 
                src="/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    Rising Brand Week 💜
                </p>

            </div>


        </div>


    </div></li>
                    <li className="hover:text-lime-500 transition-colors duration-300

  group"><a href="#">Suncare</a>
  <div
    className="
    opacity-0
    pointer-events-none
    group-hover:opacity-100
    group-hover:pointer-events-auto

    absolute
    top-8
    left-0
    right-0
    mx-auto
    transition-all
    duration-300
    delay-200
    w-[1200px]
    bg-white
    shadow-xl

    z-50

    p-10

    text-black
    "
    >


        <div className="grid grid-cols-5 gap-10">


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Skincare Product
                </h2>
                <div className="border-b border-gray-200 w-[400px] "></div>
                <ul className="space-y-3 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Skincare</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Bath & Body</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Hair</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Face Masks </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Suncare </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">K-POP </a>
                    </li>

                </ul>

            </div>

 <div className="py-5">

               

                <ul className="space-y-3 text-base py-7">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Makeup Brush & Tools</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Accessories</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Welness</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Men's Care</a>
                    </li>
                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Supplements</a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Food & Drink </a>
                    </li>
                     <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Special Value Sets </a>
                    </li>

                </ul>

            </div>


            <div>

                <h2 className="text-lg font-bold mb-4">
                    Trend Keyword
                </h2>
                <div className="border-b border-gray-200 w-[200px] "></div>

                <ul className="space-y-4 text-base">

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Vegan</a>
                    </li>

                    <li className="transition-colors duration-300 hover:text-lime-500">
                        <a href="#">Clean Beauty</a>
                    </li>

                </ul>


            </div>



            <div>

                <img 
                src="/bannerimg/376c36aa-6a18-43a3-8906-d5264fc9c124.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    OY Magazine 🎥
                </p>

            </div>



            <div>

                <img 
                src="/bannerimg/265fd36f-af49-4c6f-9360-ee90ee6b3187.webp"
                className="w-[250px] h-[300px] object-cover"
                />

                <p className="mt-3 font-medium text-base">
                    Rising Brand Week 💜
                </p>

            </div>


        </div>


    </div></li>
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">K-pop</a></li>
                </ul>

                <ul className="flex gap-6 items-center cursor-pointer">
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">Events</a></li>
                    <li className="relative hover:text-lime-500 transition-colors duration-300
  after:absolute
  after:left-0
  after:bottom-0
  after:h-[3px]
  after:w-0
  after:bg-lime-500
  hover:after:w-full
  after:transition-all
  after:duration-300"><a href="#">Membership</a></li>
                </ul>
            </div>
        </div>
    )
}
export default NavMenu