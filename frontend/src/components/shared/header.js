import React, { useState } from "react";
import MLH from "./headerPics/MLH.png";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import ig  from "./headerPics/ig.png";
import fb  from "./headerPics/fb.png";
import tw  from "./headerPics/tw.png";
import pr  from "./headerPics/pr.png";
import cr  from "./headerPics/cr.png";
import SearchRequest from "../../service/Requests/Search";
import ProductCard from "../product/productCard";


const Header =props=>{
  const{items,category,product} = props;
  const[query,setQuery]=useState('');
  const[searchResults,setSearchResults]=useState([]);

  const HandleSearchResult = async () => {
    try {
        const Name = query;
        const searchResponse = await SearchRequest.searchForProducts(Name);
        setSearchResults(searchResponse); 
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleCloseResults = () => {
    setSearchResults([]); 
  }
  
    return (
      <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="logo">
           <Link to="/"  aria-current="page" href="#" ><img className="ime" src={MLH} style={{width:'120px'}}/></Link>
        </div>
        <div className="collapse navbar-collapse" id="snavbarNav" >
          <ul className="navbar-nav ms-auto">
            <li className="iitem">
              <Link to="/Landing" className="ilink " aria-current="page" href="#" >Products </Link>
            </li>
            
            <li className="iitem">
              <div class="dropdown" >
               <Link to="/Landing" className="ilink " aria-current="page" href="#" >categories  </Link>
                <div class="dropdown-content">
                  <Link to={`category/1`} style={{textDecoration:"none" , }} > Phones </Link>
                  <Link to={`category/2`} style={{textDecoration:"none" , }} > Laptobs/tablets </Link>
                  <Link to={`category/3`} style={{textDecoration:"none" , }} > Home Appliances </Link>
                  <Link to={`category/4`} style={{textDecoration:"none" , }} > Fashion </Link>
                  <Link to={`category/5`} style={{textDecoration:"none" , }} > Electronic Items </Link>
                </div>
              </div>
            </li>
            <li className="iitem">
              <Link to="/About" className="ilink " aria-current="page" href="#" >About us </Link>
            </li>
            <li className="iitem">
              <Link to="/Cart" className="ilink " aria-current="page" href="#" ><img src={cr} style={{width:'30px'}}/>({items?.length}) Panier</Link>
            </li>

            <li className="iitem">
                <input type="text"  onChange={(e) => setQuery(e.target.value)}  className="search"  placeholder="looking for a product ?"/>
                <button onClick={HandleSearchResult} className="search-button" > 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
            </li>
            <li className="iitem">
              <div className="input-group">
                <a href="http://localhost:8000/login" > <img  className="ime" src={pr} style={{width:'34px'}}/></a>
                <a href="https://www.instagram.com/mohamed___y2/" > <img className="ime" src={ig} style={{width:'34px'}}/> </a>
                <a href="https://web.facebook.com/med.simo.7587370/" > <img className="ime" src={tw} style={{width:'34px'}}/> </a>
                <a href="https://twitter.com/mohamed01lah" > <img className="ime" src={fb} style={{width:'25px',marginLeft:'4px',marginTop:'4px'}}/> </a>
              </div>
            </li>

          </ul>

        </div>
      </div>
    </nav>

    {searchResults?.data?.length > 0 ? (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxHeight: '80%',
      overflowY: 'auto',
      zIndex: '1111',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '15px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      padding: '20px',
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{left:0}}>Search Results</h3>
            <button onClick={handleCloseResults} style={{right:0, border: 'none', backgroundColor: 'transparent', position: 'fixed', zIndex: '111'}}>
              ❌
            </button>
        </div>
        <div className="container">
          <div className="row">
            {searchResults.data.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
         </div>
       </div>
   </div>
) : (
  <></>
)}

    <style>
        {`
        .navbar-nav{
          display: inline-block;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .iitem{
          display: inline-block;
        }

        .ime{
          transition:transform 0.3s ease-in-out;
        }
        .ime:hover{
          transform:scale(1.2);
        }
        .search {
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #333;
          background-color: #333;
          color: #fff;
          width: 200px;
        }
        
        .search:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 5px #007bff;
        }
        
        .search-button {
          background-color: transparent;
          border: none;
          padding: 8px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .search-button:hover {
          transform: scale(1.1);
        }
        
        .search-button svg {
          width: 24px;
          height: 24px;
          stroke: #007bff;
        }
        
        .search-button svg circle {
          fill: none;
        }
        
        

          .navbar{
            background-color:#708ae4;
            height:80px;
            display:flex;
            position:relative;
            z-index:1111;
            
          }
          
          .ilink{
            position: relative;
            color: #FFF;
            font-size: 18px;
            font-weight: bold;
            padding: 15px 20px;
            margin-right: 10px;
            text-decoration:none;
          }
          .ilink::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: transparent;
            transition: background-color 0.3s ease;
          }
          .ilink::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #4285f4; /* Changed to blue */
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          
          .ilink:hover::after{
            transform: scaleX(1);
            transform-origin: left;
          }
          
          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            border-radius:15px;
          }

          .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }

          .dropdown-content a:hover {
            background-color: #f1f1f1;
            border-radius:15px;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }


        
        `}
      </style>
      </>

    
    )
};

const mapStateToProps =({cart}) => {
  const { items } = cart;
  return { items };
}

export default connect(mapStateToProps)(Header);




