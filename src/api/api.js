import axios from 'axios';
import React from 'react';

export const productAPI = {
    getProductAPILimit(n){
        return axios.get(`https://fakestoreapi.com/products?limit=${n}`)
        .then(repsonse => repsonse.data);
    },
    getProductAPI(){
        return axios.get(`https://fakestoreapi.com/products`)
        .then(repsonse => repsonse.data);
    },
    getProductAPIDetail (id){
        return axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.data);
    },
}