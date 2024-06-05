import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { CategoryDefaultProps } from "../../data/CategoryDefaultProps";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/actions/Cart";
import {connect} from 'react-redux';

const ProductCard = props =>{
    const { product , items , addItem } =props;
    /*const [itemIsInCart , setItemIsInCart] =useState(false);

    const handleAddItemToCart = () => {
        addItem(product);
        setItemIsInCart(true);
    };

    const handleCheckIfItemIsInCart = () => {
        const item = items?.filter(item => item?.id === product?.id);
        if(item[0]){
            setItemIsInCart(true);
        }
    };

    useEffect(() => {
        handleCheckIfItemIsInCart();
    },[]);*/
    
    return(
        <>
            <style>
                {`
                    .card-img-top{
                        transition:transform 0.5s ease-in-out;
                        aspect-ratio:1.2;
                        cursor:pointer;
                        
                    }
                    .card-img-top:hover{
                        transform:scale(1.5);
                    }
                    .card{
                        overflow:hidden;
                    }
                `}
            </style>
            <div className="card" style={{borderRadius:'20px' ,marginBottom:'10px' , marginTop:'10px',padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '20px'}}>
             <img src={product?.avatar} className="card-img-top" alt={product?.name} style={{width:'55%' ,margin:'10px' , marginLeft:'23%',justifyContent:"center" , alignItems:"center"}} />
               <div className="card-body">
                  <h5 className="card-title">{product?.name}</h5>
                  <p className="card-text">{product?.description} </p>
                  <p className="card-text"><b>Price:<strong> ${product?.price}  </strong></b></p>
                  <div className="d-grid gap-2">
                    <Link className="btn btn-light btn-rounded" to={`/product/${product?.id}`} style={{ padding: '6px', boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '20px'}}>View Details</Link>
                  </div>
              </div>
           </div>
        </>
               
    )
};

                 /* <button  type="button" onClick={handleAddItemToCart} className="btn btn-primary btn-shadow btn-animatio" style={{ borderRadius:'20px'}}>
                        {itemIsInCart ? "✔️🛒" : "Buy"}
                    </button>
                */

ProductCard.propTypes = {
    product : PropTypes.object
};

ProductCard.defaultProps = {
    product : CategoryDefaultProps?.products?.[0]
};

const mapStateToProps = ({ cart }) => {
    const {items} = cart;
    return { items };
};

const mapDispatchToProps = {
    addItem,
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);