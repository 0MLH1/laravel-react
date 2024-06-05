import React from "react";
import Header from "../components/shared/header";
import { Route , Routes } from 'react-router-dom';
import Landing from "./Landing";
import Cart from "./Cart";
import Category from "./Category"; 
import Product from "./Product";
import NotFound from "./Error/404";
import AboutCard from "../components/about/aboutCard";
import Debut from "./Debut";
import Success from "./payment/success";
import Cancel from "./payment/cancel";




const Views= () =>{
    return (
        <>
        <Header/>
          <div className='container my-4'>
            <Routes>
              
                {/**
                 * <Route path="/" element={<Landing title="landing Page"/>} />
                 * **/}

                <Route path="/" element={<Debut title="Welcome Page"/>} />
                <Route path="/Landing" element={<Landing title="landing Page"/>} />

                <Route path="/cart" element={<Cart title="My Cart"/>} />
                <Route path="/about" element={<AboutCard title="Contact us"/>} />
                <Route path="/product/:id" element={<Product title="Product details"/>} />
                <Route path="/category/:id" element={<Category title="Category details"/>} />
                <Route path="/payment/success" element={<Success title="Payment done"/>} />
                <Route path="/payment/cancel" element={<Cancel title="Payment failed"/>} />
                <Route path="*" element={<NotFound title="Page Not Found"/>} />
            </Routes>
          </div>
        </>          
    );
};

export default Views;