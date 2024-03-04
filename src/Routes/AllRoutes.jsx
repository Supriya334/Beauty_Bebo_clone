import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
// import Product from "../pages/Product";
import SingleProd from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import ThankYou from "../pages/ThankYou";
import CheckOut from "../pages/CheckOut";
import Product from "../pages/ProductAmit";


function AllRoutes() {

    return (
        <>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/product" element={<Product />} />
                <Route path="/singleProduct" element={<SingleProd />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/thankYou" element={<ThankYou />} />
                <Route path="/checkOut" element={<CheckOut/>}/>
            </Routes>
        </>
    )
}

export default AllRoutes;


