import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setCurrentProduct, addItem } from "../../redux/actions";
import useLoading from "../../hooks/useLoading";
import { useParams } from 'react-router-dom';
import ProductRequest from "../../service/Requests/Product";

const ProductDetails = props => {
    const { setCurrentProduct, currentProduct, items, addItem } = props;
    const [loading, withLoading] = useLoading();
    const [itemIsInCart, setItemIsInCart] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const { id } = useParams();

    const HandleGetAProduct = async () => {
        try {
            const product = await withLoading(ProductRequest.getAProduct(id));
            setCurrentProduct(product?.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddItemToCart = () => {
        setShowConfirmationModal(true);
    };

    const handleConfirmPurchase = () => {
        addItem(currentProduct);
        setShowConfirmationModal(false);
        setItemIsInCart(true);
    };

    const handleCheckIfItemIsInCart = () => {
        const item = items?.filter(item => item?.id === currentProduct?.id);
        if (item[0]) {
            setItemIsInCart(true);
        }
    };

    useEffect(() => {
        HandleGetAProduct();
        handleCheckIfItemIsInCart();
    }, []);

    return (
        <div style={{ padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '20px' }}>
            {loading && currentProduct ?
                <h4>Waiting for product...</h4>
                :
                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '20px' }}>
                    <h1 style={{ marginTop: '20px', marginBottom: '10px' }}>{currentProduct?.name}</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={currentProduct?.avatar} style={{ width: '90%', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} alt={currentProduct?.name} />
                        </div>
                        <div className="col-lg-6" >
                            <p style={{ margin: '10px' }}>{currentProduct?.description}</p>
                            <p><b>Price: <span style={{ fontWeight: 'bold', color: '#007bff' }}>${currentProduct?.price}</span></b></p>
                            <div style={{ marginTop: '20px' }}>
                                {showConfirmationModal ? (
                                    <div style={{display: 'flex', position: 'fixed', top: '0', left: '0', width: '100%',height:'100%',   justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ background:'rgba(255,255,255,0.3)', backdropFilter:'blur(15px)',padding: '20px',height:'30vh',width:'25%', borderRadius: '15px', boxShadow: '20px 20px 40px -6px rgba(0,0,0,0.2)' }}>
                                            <h2 style={{fontFamily:'montserrat',fontSize:'28px',fontWeight:'bold'}}>Price: ${currentProduct?.price}</h2>
                                            <div style={{margin:'10%'}}></div>
                                            <button  className="btn btn-secondary" style={{ borderRadius:'15px',marginRight:'5px'}} onClick={handleConfirmPurchase}>Confirm</button>
                                            <button className="btn btn-secondary" style={{ borderRadius:'15px' }} onClick={() => setShowConfirmationModal(false)}>Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <button type="button" onClick={handleAddItemToCart}  className="btn btn-primary " style={{ borderRadius: '20px' }}>
                                        {itemIsInCart ? "✔️🛒" : "Add to Cart"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

const mapStateToProps = ({ product, cart }) => {
    const { currentProduct } = product;
    const { items } = cart;
    return { currentProduct, items };
};

const mapDispatchToProps = {
    setCurrentProduct,
    addItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
