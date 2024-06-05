import React from "react";
import { useEffect } from "react";
import CategoryCard  from '../../components/category/categoryCard';
import { useDocumentTitle } from '../../hooks/useDocumentTitle'; 
import CategoryRequest from '../../service/Requests/Category';
import {connect } from 'react-redux';
import { setCategories } from "../../redux/actions/Category";
import useLoading from "../../hooks/useLoading";



const Landing = props =>{
    const { title ,setCategories , categories }=props;
    const [loading , withLoading] = useLoading();
    useDocumentTitle(title);

    const getCategories =async() =>{
        try{
            const category =await withLoading(CategoryRequest.getAllCategories());
            setCategories(category?.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(categories?.length <1){
            getCategories();
        }
        
    },[]);

    return(
        <>
      {
        loading 
          ? "Loading Categories and Products" 
          : categories?.length > 0 
            ? categories?.map(category => (
              <CategoryCard category={category} key={category?.id}/>
            ))
            : 
              !loading && <h4>No Category Available</h4>
              
      }
    </>
    );
};

const mapStateToProps =({category}) => {
    const { categories} = category;
    return { categories }
}
const mapDispatchToProps = {
    setCategories
}

export default connect(mapStateToProps ,mapDispatchToProps )(Landing);