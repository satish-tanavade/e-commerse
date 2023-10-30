import React, { useEffect, useState } from 'react'
import Products from '../component/Products'
import CompCategory from '../component/CompCategory'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const getProduct = async () => {

            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                setProducts(data)
                // console.log(data);

            } catch (error) {
                console.log(error);
            }
        }

        getProduct()
    }, [])
    return (
        <>
            <CompCategory />
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
            </div>
            {products && <Products products={products} />}
        </>
    )
}

export default Home