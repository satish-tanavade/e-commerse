import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Products from '../component/Products'

function CategoryPage() {

    const {type} = useParams()
    // console.log(type);

    const [category, setCategory] = useState([])

    useEffect(() =>{

        fetch(`https://fakestoreapi.com/products/category/${type}`)
        .then(res => {
            return res.json()
        })
        .then(res =>{
            setCategory(res)
        })

        
    }, [category])

    // console.log(category);
  return (
    
    <>
            {category && <Products products={category}/>}
    </>
  )
}

export default CategoryPage