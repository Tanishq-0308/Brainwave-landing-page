import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import App from "../App";
import About from "../screen/about/About";
import Home from "../screen/Home/Home";
import Products from "../screen/Products/Products";
import ContactUs from "../screen/Contact us/ContactUs";
import Client from "../screen/Clients/Client"
import Services from "../screen/Services/Services";

export const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about-us" element={<About/>} />
            <Route path="products" element={<Products/>} />
            <Route path="contact-us" element={<ContactUs/>} />
            <Route path="clients" element={<Client/>} />
            <Route path="services" element={<Services/>}/>
        </Route>
    )
)
