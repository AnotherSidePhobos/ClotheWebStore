import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import ProductComponent from '../ProductComponent/ProductComponent';
import {setProducts} from '../../redux/actions/productActions';
import {productAPI} from '../../api/api';
import s from './ProductListing.module.css';
import {setCurrentPage} from './../../redux/actions/productActions';

const ProductListing = () => {

    const products = useSelector((state) => state);
    const perPage = useSelector(state => state.allProducts.perPage);
    const currentPage = useSelector(state => state.allProducts.currentPage);
    let totalProduct = products.allProducts.products.length;
    const dispatch = useDispatch();
    let countPages;
    if(totalProduct) {
        countPages = Math.ceil(totalProduct / perPage);
    }


    
    let pages = [];

    const lastproductIndex = currentPage * perPage;
    const firstproductIndex = lastproductIndex - perPage;
    let currentproduct = '';
    debugger
    if(products.allProducts.products.length != 0){
        currentproduct = products.allProducts.products.slice(firstproductIndex, lastproductIndex);

        const asda='sd'
    }


    function createPages(pages, pagesCount, currentPage) {
        if(pagesCount > 10) {
            if(currentPage > 5) {
                for (let i = currentPage-4; i <= currentPage+5; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
        }  else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }
    createPages(pages, countPages, currentPage)


    productAPI.getProductAPI().then((response) =>{
        debugger
        dispatch(setProducts(response));
    })

    // const fetchProduct = async () =>{
    //     const response = await axios
    //         .get("https://fakestoreapi.com/products")
    //         .catch((err) =>{
    //         console.log("Err: ", err);
    //     });
    //     console.log("from here: ", response.data);
    //     dispatch(setProducts(response.data));
    // };

    // useEffect(() => {
    //     fetchProduct()
    // }, []);


    const onPageClick = (page) => {
        debugger
        dispatch(setCurrentPage(page))
    }


    let temp = pages.map((page) =>{
        return (<span onClick={() => {onPageClick(page)}} className={currentPage == page ? s.selectedPage :s.pagEl}>{page}</span>)
    })
    return (
        <>
            <div className={s.myContainer}>
                <div className={s.pag}>
                     {temp}
                </div>
                <div className={s.mainBlock}>
                    <ProductComponent currentproduct={currentproduct}/>
                </div>
            </div>
        </>
    )
}
export default ProductListing;