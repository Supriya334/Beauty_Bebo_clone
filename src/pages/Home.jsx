import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Login from "./Login";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Home() {


  return (
    <>

      <div className="parent-slider flex">


        <div className="all-categories">
          {/* work to be done */}


          <div className="all-cate-comp">


            <ul>
              <i class='bx bx-list-ul'></i>
              All Categories

              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" /><Link to="http://localhost:3000/product">Makeup</Link> 
              </li>


              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" />Skin </li>



              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="" /> Hair</li>


              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" /> Personal Care</li>



              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" />Mom & Baby Care </li>


              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" /> Fragrance</li>


              <li className="flex"> <img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="" /> Ayurveda</li>
            </ul>
          </div>
        </div>



        <div className="slider">

          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.beautybebo.com/pub/media/ads/slider-2.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://www.beautybebo.com/pub/media/ads/slidrr.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://www.beautybebo.com/pub/media/ads/slider_1.png" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>

      </div>




      <div className="prod flex">
        <div className="prod-childs">
          <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/p/p/ppd200g_540x.jpg" alt="" />

          <a href="https://www.beautybebo.com/ponds-pure-white-anti-pollution-purity-face-wash-200gm.html">Ponds Pure White Anti-Pollution + Purity Face Wash (220gm)</a>

          <p>

            <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> (1)
          </p>
          <p>$389 <span style={{ color: "green" }}>25% off</span></p>

          <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

          <span><i class=' hrt bx bx-heart-square' ></i></span>


        </div>


        <div className="prod-childs"><img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/m/a/mama14.jpg" alt="" />

          <a href="https://www.beautybebo.com/mamaearth-ubtan-face-wash-with-turmeric-saffron-for-tan-removal-pack-of-2.html">Mammearth Ubtan Face Wash With Turmeric & Saffron For Tan Removal</a>
          <p> <i class='yellow-star bx bxs-star' ></i>
            <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> <i class='yellow-star bx bxs-star' ></i> (4)
          </p> <p>$399 <span style={{ color: "green" }}>25% off</span></p>

          <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button> <span><i class=' hrt bx bx-heart-square' ></i></span></div>


      </div>







      <div className="image-random">
        <img src="https://www.beautybebo.com/pub/media/ads/sareeee.png" alt="" />
      </div>




      <div className="icons flex">

        <div className="icon-child">
          <div className="imgC">
            <img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="" /> </div> <p>Makeup</p>
        </div>



        <div className="icon-child">
          <div className="imgC">
            <img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="" /></div>
          <p>Skin</p>
        </div>


        <div className="icon-child">
          <div className="imgC">
            <img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="" /></div>
          <p>Hair</p></div>


        <div className="icon-child">
          <div className="imgC">
            <img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="" /></div>

          <p>Personal Care</p></div>


        <div className="icon-child">
          <div className="imgC">
            <img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="" /></div>

          <p>Mom & Baby Care</p></div>


        <div className="icon-child">      <div className="imgC"> <img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="" />
        </div>
          <p>Eye</p></div>


        <div className="icon-child">
          <div className="imgC"><img src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt="" /> </div> <p>Fragrance</p></div>

      </div>




      <div className="lotus">

        <div className="lotus-child">

          <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/b/0/b0c3yw4hrg_1_1024x.png" alt="" />

          <p> <a href="https://www.beautybebo.com/lotus-herbals-whiteglow-vitamin-c-radiance-gel-cream-spf-20-pa.html">Lotus Herbals Whiteglow Vitamin C Radiance Gel Cream Spf 20 PA+++ </a></p>

          <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>

          <p>$399.00 <span style={{ color: "green" }}>16% off</span> </p>

          <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

          <span><i class=' hrt bx bx-heart-square' ></i></span>


        </div>



        <div className="lotus-child">
          <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/5/6/5654d3c1-5483-44a1-aa31-deeeab71197c.png" alt="" />
          <p>
            <a href="https://www.beautybebo.com/olay-natural-white-light-instant-glowing-fairness-cream-40g-pack-of-2.html">Olay Natural Light Instant Glowing Fairness Cream, 40g Pack of 2</a></p>

          <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>

          <p>$299.00 <span style={{ color: "green" }}>16% off</span> </p>

          <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

          <span><i class=' hrt bx bx-heart-square' ></i></span>


        </div>




        <div className="lotus-child">

          <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/g/a/garnier-skin-naturals-light-lotion-250-ml.png" alt="" />
          <p>
            <a href="https://www.beautybebo.com/garnier-skin-naturals-moisturising-serum-in-lotion-250-ml.html">Garnier Natural Light Instant Glowing Fairness Cream, 40g Pack of 2</a></p>

          <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>

          <p>$299.00 <span style={{ color: "green" }}>16% off</span> </p>

          <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

          <span><i class=' hrt bx bx-heart-square' ></i></span>
        </div>




        <div className="lotus-child">
          <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf50_front_600x.png" alt="" />

          <p> <a href="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf50_front_600x.png">Suns Cream Vitamin C Radiance Gel Cream Spf 20 PA+++</a>  </p>

          <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>

          <p>$799.00 <span style={{ color: "green" }}>16% off</span> </p>

          <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

          <span><i class=' hrt bx bx-heart-square' ></i></span>



        </div>
      </div>




      <div className="image-random-2">
        <img src="https://www.beautybebo.com/pub/media/ads/winter_.jpg" alt="" />
      </div>



      <div className="best-seller">




        <div className="seller">

          <div className="ponds-box flex">
            <div className="sidepara ">
              <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf_15_.png" alt="" />
            </div>
            <div className="sidepara">

              <p> <a href="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf50_front_600x.png">Suns Cream Vitamin C Radiance Gel Cream Spf 20 PA+++</a>  </p>

              <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>

              <p>$799.00 <span style={{ color: "green" }}>16% off</span> </p>

              <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

              <span><i class=' hrt bx bx-heart-square' ></i></span>


            </div>
          </div>




          <div className="ponds-box">

            <div className="ponds-box flex">
            <div className="sidepara ">
              <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf_15_.png" alt="" />
            </div>
            <div className="sidepara">

              <p> <a href="https://www.beautybebo.com/pub/media/catalog/product/cache/eaadabc6126fdee9eef2f7b7c34a8f4b/s/p/spf50_front_600x.png">Suns Cream Vitamin C Radiance Gel Cream Spf 20 PA+++</a>  </p>

              <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>

              <p>$799.00 <span style={{ color: "green" }}>16% off</span> </p>

              <button className="btn-star"> <i class='  bx bxs-basket' ></i> Add To Cart</button>

              <span><i class=' hrt bx bx-heart-square' ></i></span>


            </div>
          </div>
          </div>

          
          <div className="ponds-box"></div>
        </div>





        <div className="seller">

        </div>




        <div className="seller">

        </div>


      </div>



      <div className="random-img3">
        <img src="https://www.beautybebo.com/pub/media/ads/lehengas.png" alt="" />
      </div>



      <div className="welcome">
        <h4>Welcome to Beauty Products Online Shopping India- Beauty Bebo</h4>
        <br />
        <p>If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup. <br />

          Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products <br />
          <b>online!</b>


          <br />
          <b>Clean Your Face First!</b><br />

          Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic online shopping will be worth your time and effort.

          <br />

          Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.
          <br /><b>Apply a Moisturizer</b>
        </p>
        <p style={{ color: "crimson" }}>Read More</p>
      </div>





      <div className="footer-main">
        <div className="Footer-org">

          <div className="cont-grid">

            <div className="section">
              <h6>CONTACT INFO</h6>
              <p className="dots">------------</p>

              <p className="contact">(+91)7877061041</p>

              <p className="contact">sales@beautybebo.com</p>

              <p className="contact">Open time: 10:00AM - 7:00PM</p>

              <i class='contact bx bxl-facebook-circle' ></i>
              <i class='contact bx bxl-instagram-alt'></i>


            </div>


            <div className="section">
              <h6>QUICK LINKS</h6>
              <p className="dots">------------</p>

              <ul className="ul">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Return and Refund Policy</li>
                <li>Shipping Policy</li>
              </ul>
            </div>



            <div className="section">
              <h6>CUSTOMER INFO</h6>
              <p className="dots">------------</p>

              <ul className="ul">
                <li>My Account</li>
                <li>Track Your Order</li>
                <li>Order Returns </li>
                <li>Wishlist</li>
                <li>News & Events</li>
                <li>FAQ</li>
              </ul>
            </div>


            <div className="section">
              <h6>CATEGORIES</h6>
              <p className="dots">------------</p>
              <ul className="ul">
                <li>Makeup</li>
                <li>Skin</li>
                <li>Hair</li>
                <li>Personal Care</li>
                <li>Mom & Baby Care </li>
                <li>Fragrance</li>
                <li>Ayurveda</li>
              </ul>

            </div>

          </div>

          <hr />
          <div>
            <div className="logos">
              <div className="img-logo">
                <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="" />
              </div>


              <div className="para">
                <p>Signup For Newsletter</p>
                <input type="text" name="" id="" placeholder="Your Email Address" />
                <button>Subscribe</button>

              </div>


            </div>
          </div>
        </div>


        {/*  */}
        <div className="black">
          <p style={{ textAlign: "center", color: "grey", fontFamily: "bold" }}>copy@ 2020 ALL Rights Reserved</p>

        </div>

      </div>

    </>
  );
}

export default Home;
