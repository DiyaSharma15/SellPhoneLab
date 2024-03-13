"use client";
import React,{useState} from 'react'
import './productCategories.css'
import ProductCategoriesItem from './product-categories-item/ProductCategoriesItem'
import sofa from './Images/Lovepik_com-400681657-scandinavian-indoor-home-environment-sofa.png';
import mattress from './Images/Lovepik_com-401109348-bed.png';
import pillow from './Images/category-thumb-6-removebg-preview.png';
import bedsheets from './Images/Bedsheets.png';
import blind from './Images/pngwing.com.png';
import wallpaper from './Images/wallpaper.png';


const CategoriesItem=[
    {
      name:"Sofa",
      image:sofa
    },{
        name:"Mattress",
        image:mattress
    },
    {
        name:"Pillow",
        image:pillow
    },{
      name:"Bedsheets",
      image:bedsheets
  },
    {
        name:"Blind",
        image:blind
    },{
        name:"Chair",
        image:wallpaper
    }
]
const ProductCategories = (props) => {

  return (

    <div className='container flex-wrap d-flex flex-row my-5 categories-container-box align-items-center justify-content-between my-3'>


    {CategoriesItem.map((element)=>{
            return <ProductCategoriesItem key={element.name} name={element.name} image={element.image}/>
        })}

    </div>
  )
}

export default ProductCategories
