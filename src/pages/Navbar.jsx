import { useState } from "react";
import { Box } from "@chakra-ui/react";

function Navbar() {

    // const menuTitleArray = ["MAKEUP", "SKIN", "HAIR", "PERSONAL CARE", "MOM & BABY CARE", "FRAGRANCE", "WOMEN FASHION", "BRANDS"]

    // const [isHovered, setisHovered] = useState(false);
    // function MenuItem({ menuTitle, icon }) {

    //     function mouseEntered() {
    //         console.log("Event occured", isHovered);
    //         setisHovered(!isHovered)
    //     }
    //     function mouseLeft() {
    //         console.log("Event occured", isHovered);
    //         setisHovered(!isHovered)
    //     }


    //     return <Box onMouseEnter={mouseEntered} onMouseLeave={mouseLeft} className="flex menuItem">
    //         <p>{menuTitle}</p>
    //         <i class='bx bx-chevron-down'></i>
    //     </Box>
    // }


    return (
        <>
            <div id="top">
                <img src="https://www.beautybebo.com/pub/media/ads/home-slider/OFFER_HOME.jpeg" alt="" />
            </div>
            <div className="second-nav flex">

                <div id="logo"> <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="" /></div>

                <div id="search">

                    <select>   <option value="">All Categories Here</option>
                        <option value="">MakeUp</option>
                        <option value="">----Face</option>
                        <option value="">----Foundation</option>
                        <option value="">----Blush</option>
                        <option value="">----Highlights</option>
                        <option value="">----Concealer</option>
                        <option value="">----Compact & Powder</option>
                        <option value="">----Face Primer</option>
                        <option value="">----MakeUp Remover</option>
                        <option value="">----Face Cream</option>
                        <option value="">----Contour</option>
                        <option value="">----Loose Powder</option>
                        <option value="">----Setting Spray</option>
                        <option value="">----Makeup Kits</option>
                        <option value="">----CC Cream</option>
                        <option value="">----Eye</option>  </select>

                    <input id="input" type="search" />
                    <i class='bx bx-search-alt-2 icon-search'></i>
                </div>



                <div className="MyAcc flex">

                    <div className="heart icon-h"><a href="http://localhost:3000/cart"><i class='bx bxs-heart'></i></a>  </div>
                    <div className="user icon-h"> <a href="http://localhost:3000/login "><i class='bx bx-user'></i> </a></div>
                    <p>My Account</p>


                </div>

            </div>
            <div className="hover-nav flex">
                {/* <div className="flex">
                    {menuTitleArray.map((ele) => <MenuItem menuTitle={ele} />)}
                </div>

                <h4 id="cart"><i class='bx bxs-shopping-bag'></i> MY CART -$0.00</h4> */}


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 MakeUp
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">BB Cream</a></li>
    <li><a class="dropdown-item" href="#">Blush</a></li>
    <li><a class="dropdown-item" href="#">Bronzer</a></li>
    <li><a class="dropdown-item" href="#">Contour</a></li>
    <li><a class="dropdown-item" href="#">Concealer</a></li>
    <li><a class="dropdown-item" href="#">Compact & Powder</a></li>
    <li><a class="dropdown-item" href="#">Face Primer</a></li>
    <li><a class="dropdown-item" href="#">Foundation</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>

  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Skin
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Anti Aging-Cream</a></li>
    <li><a class="dropdown-item" href="#">Bleach Cream </a></li>
    <li><a class="dropdown-item" href="#">Brightening Cream</a></li>
    <li><a class="dropdown-item" href="#">Facial Wash </a></li>
    <li><a class="dropdown-item" href="#">Facial Wipes</a></li>
    <li><a class="dropdown-item" href="#">Face Oil</a></li>
    <li><a class="dropdown-item" href="#">Facial Kits</a></li>
    <li><a class="dropdown-item" href="#">Face Tools</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>

  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Hair
  </button>
  
  <ul class="dropdown-menu">

    <li><a class="dropdown-item" href="#">Color Protection </a></li>
    <li><a class="dropdown-item" href="#">Dandruff</a></li>
    <li><a class="dropdown-item" href="#">Dry Shampoo</a></li>
    <li><a class="dropdown-item" href="#">Gels & Waxes</a></li>
    <li><a class="dropdown-item" href="#">Conditioners</a></li>
    <li><a class="dropdown-item" href="#">Hair serum</a></li>
    <li><a class="dropdown-item" href="#">Face Primer</a></li>
    <li><a class="dropdown-item" href="#">Foundation</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
    
<div className="li-items">
<img Flex src="https://www.beautybebo.com/pub/media/ads/hair_care_1_2.png" alt="" />
</div>

  
  
  </ul>

  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Personal Care
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Body Cleaners</a></li>
    <li><a class="dropdown-item" href="#">Body Massage Oil</a></li>
    <li><a class="dropdown-item" href="#">Body Wash</a></li>
    <li><a class="dropdown-item" href="#">Essential Creams</a></li>
    <li><a class="dropdown-item" href="#">Concealer</a></li>
    <li><a class="dropdown-item" href="#">Compact & Powder</a></li>
    <li><a class="dropdown-item" href="#">Face Primer</a></li>
    <li><a class="dropdown-item" href="#">Foundation</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>



  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Mom & Baby
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Bath Time</a></li>
    <li><a class="dropdown-item" href="#">Diapers</a></li>
    <li><a class="dropdown-item" href="#">Lotions & Creams</a></li>
    <li><a class="dropdown-item" href="#">Oils</a></li>
    <li><a class="dropdown-item" href="#">Powder</a></li>
    <li><a class="dropdown-item" href="#">Compact & Powder</a></li>
    <li><a class="dropdown-item" href="#">Face Primer</a></li>
    <li><a class="dropdown-item" href="#">Foundation</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>




  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Fragrance
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Perfumes</a></li>
    <li><a class="dropdown-item" href="#">Deodrants</a></li>
    <li><a class="dropdown-item" href="#">Contour</a></li>
    <li><a class="dropdown-item" href="#">Concealer</a></li>
   
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>




  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Women Fashion
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">BB Cream</a></li>
    <li><a class="dropdown-item" href="#">Blush</a></li>
    <li><a class="dropdown-item" href="#">Bronzer</a></li>
    <li><a class="dropdown-item" href="#">Contour</a></li>
    <li><a class="dropdown-item" href="#">Concealer</a></li>
    <li><a class="dropdown-item" href="#">Compact & Powder</a></li>
    <li><a class="dropdown-item" href="#">Face Primer</a></li>
    <li><a class="dropdown-item" href="#">Foundation</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>



  <button class="btn btn-secondary dropdown-toggle color-pink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 Brands
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">BB Cream</a></li>
    <li><a class="dropdown-item" href="#">Blush</a></li>
    <li><a class="dropdown-item" href="#">Bronzer</a></li>
    <li><a class="dropdown-item" href="#">Contour</a></li>
    <li><a class="dropdown-item" href="#">Concealer</a></li>
    <li><a class="dropdown-item" href="#">Compact & Powder</a></li>
    <li><a class="dropdown-item" href="#">Face Primer</a></li>
    <li><a class="dropdown-item" href="#">Foundation</a></li>
    <li><a class="dropdown-item" href="#">Highlighters</a></li>
    <li><a class="dropdown-item" href="#">Loose Powder</a></li>
    <li><a class="dropdown-item" href="#">MakeUp Kits</a></li>
    <li><a class="dropdown-item" href="#">Makeup Remover</a></li>
    <li><a class="dropdown-item" href="#">Setting Spray</a></li>
  </ul>
 

  <button class="btn btn-secondary dropdown-toggle color-pink" type="button"aria-expanded="false">
  <a href="http://localhost:3000/cart">My Cart </a>
  </button>
  </div>







            </div>

            {/* Dropdoown menus */}
            {/* <Box h="100px" style={{ backgroundColor: "green" }} _hover={{ backgroundColor: isHovered ? "red" : "green" }}>

            </Box> */}

        </>
    )

}


export default Navbar;