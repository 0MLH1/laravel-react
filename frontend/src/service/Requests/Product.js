import fetch from '../../axiosConfig/fetch';

const ProductRequest={};
const product ='products';

ProductRequest.getAProduct = (id) =>{
    return fetch({
        url : `${product}/${id}`,
        method :"get"
    });
};
 
export default ProductRequest;