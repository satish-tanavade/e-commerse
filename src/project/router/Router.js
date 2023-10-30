import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "../pages/Home";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
import CategoryPage from "../pages/CategoryPage";


export  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element= {<RootLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path="products/:id" element = {<ProductDescription/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path='products/category/:type' element ={<CategoryPage/>}/>
        </Route>
    )
)