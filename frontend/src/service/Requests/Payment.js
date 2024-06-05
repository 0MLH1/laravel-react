import fetch from '../../axiosConfig/fetch';

const PaymentRequest={};
const payment ='payment';

PaymentRequest.makePayment = (data) =>{
    return fetch({
        url : payment,
        method :"post",
        data : data
    });
};
 
export default PaymentRequest;