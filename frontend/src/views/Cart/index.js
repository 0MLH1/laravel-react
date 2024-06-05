import React from "react";
import {connect} from 'react-redux';
import CartItem from "../../components/cart/item"
import visa from "./cartPics/visa.png";
import master from "./cartPics/master.png";
import useLoading from "../../hooks/useLoading";
import PaymentRequest from "../../service/Requests/Payment";


const Cart = props =>{
    const {items , total} = props;
    const [loading , withLoading] = useLoading();

    const handleMakePayement = async () => {
        if(items?.length > 0){
            const product_ids = items?.map(item => item?.id);
            try {
                const payment = await withLoading(PaymentRequest.makePayment({
                    product_ids,
                }));
                window.location.replace(payment?.data?.url);
            }catch(error){
                console.log(error);
            }
        }
    };

    return(
        <div className='chat'>
    <div className="row">
        <div className="col-md-8">
            {items.map((item) => (
                <div className='my-3' key={item?.id}>
                    <CartItem product={item}/>
                    <hr/>
                </div>
            ))}
        </div>
        <div className="col-md-4" style={{ 
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            backgroundColor: '#fff'
        }}>
            <div className="wrapper" style={{ 
                maxWidth: '460px'
            }}>
                {
                    <div className="wrapper" style={{ 
                        maxWidth: '460px',
                        boxShadow: '3px 3px 5px #1b1b1ba2'
                    }}>
                        <div className="card px-4" style={{ backgroundColor: '#413f3f' }}>
                            <div className="my-3">
                                <h className="h8" style={{ fontSize: '25px', fontWeight: '600', color: 'white' }}>Total:${total}</h>
                                <p className="p8" style={{ fontSize: '15px', fontWeight: '400', color: 'white' }}>options :</p>
                            </div>
                    
                            <div className="debit-card mb-3" style={{ 
                                width: '100%',
                                height: '180px',
                                padding: '20px',
                                backgroundColor: '#0093E9',
                                backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
                                position: 'relative',
                                borderRadius: '5px',
                                boxShadow: '3px 3px 5px #0000001a',
                                transition: 'all 0.3s ease-in',
                                cursor: 'pointer'
                            }}>
                                <div className="d-flex flex-column h-100">
                                    <label className="d-block">
                                        <div className="d-flex position-relative">
                                            <div>
                                                <img src={visa} className="visa" alt="" style={{ width: '50px', height: '20px', objectFit: 'fill' }} />
                                                <p className="mt-2 mb-4 text-white fw-bold" style={{ fontSize: '14px' }}>Visa</p>
                                            </div>
                                        </div>
                                    </label>
                                    <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
                                        <p>4989 1237 1234 4532</p>
                                        <p>01/24</p>
                                    </div>
                                </div>
                            </div>
                            <div className="debit-card card-2 mb-4" style={{ 
                                width: '100%',
                                height: '180px',
                                padding: '20px',
                                backgroundColor: '#21D4FD',
                                backgroundImage: 'linear-gradient(116deg, #21D4FD 0%, #B721FF 100%)',
                                position: 'relative',
                                borderRadius: '5px',
                                boxShadow: '3px 3px 5px #0000001a',
                                transition: 'all 0.3s ease-in',
                                cursor: 'pointer'
                            }}>
                                <div className="d-flex flex-column h-100">
                                    <label className="d-block">
                                        <div className="d-flex position-relative">
                                            <div>
                                                <img src={master} alt="master" className="master" style={{ width: '50px', height: '50px', objectFit: 'fill' }} />
                                                <p className="mt-2 mb-4 text-white fw-bold" style={{ fontSize: '14px' }}>mastercard</p>
                                            </div>
                                        </div>
                                    </label>
                                    <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
                                        {<p>5540 2345 3453 2343</p>}
                                        <p>05/23</p>
                                    </div>
                                </div>
                            </div>
                            {items?.length > 0 && 
                                <button className="btn mb-4" onClick={handleMakePayement} disabled={loading}  style={{ 
                                    width: '100%',
                                    height: '50px',
                                    border: '1px solid #0093E9',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#0093E9',
                                    transition: 'all 0.5s ease',
                                    fontWeight: '500'
                            }}>
                                 {loading?  "wait.." : "Process to payment"}
                            </button>
                            }
                        </div>
                    </div>
                    
                }
            </div>
        </div>
    </div>
</div>

    
    )
}

const mapStateToProps =({cart}) => {
    const {items , total } = cart;
    return {items,total};
}

export default connect(mapStateToProps)(Cart);