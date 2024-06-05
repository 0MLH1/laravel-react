import React, { useEffect } from "react";
import {connect } from 'react-redux';
import {setCurrentCategory} from '../../redux/actions/Category';
import { useParams } from "react-router-dom";
import CategoryRequest from "../../service/Requests/Category";
import useLoading from "../../hooks/useLoading";
import CategoryCard from "../../components/category/categoryCard"

const CategoryDetails = props => {
    const{ currentCategory,setCurrentCategory } =props;
    const [loading , withLoading] = useLoading();
    const { id } = useParams();
    const HandleGetACategory = async () => {
        try{
            const category = await withLoading(CategoryRequest.getACategory(id));
            setCurrentCategory(category?.data);
        } catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        HandleGetACategory();
    }, [])

    return(
       <>
           {
                loading && currentCategory ? <h4>Loading category...</h4>
                : 
                <CategoryCard category={currentCategory} showMore={false}/>
                
           }
       </>
     );
};

const mapStateToProps =({ category }) => {
    const { currentCategory } = category;
    return {currentCategory};
}

const mapDispatchToProps = {
    setCurrentCategory,
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetails);