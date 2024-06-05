import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from "../../redux/actions";

const CartItem = props => {

    const { product , removeItem } = props ;

    const removeItemFromCart = () => {
        removeItem(product)
    }

    return (
        <div className='chat-item'>
            <div className="d-flex" style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                <div className="flex-shrink-0">
                   <img src={product?.avatar} width={200} height={200} alt={product?.name}/>
                </div>
                <div className="flex-grow-11 ms-3">
                    <Link to={`../product/${product?.id}`} style={{textDecoration:'none'}}>
                       <h5>{product?.name}</h5>
                    </Link>
                    <p>${product?.price}</p>
                    <button className="btn btn-secondary"  onClick={removeItemFromCart}> Delete </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeItem
}

export default connect(null,mapDispatchToProps)(CartItem);