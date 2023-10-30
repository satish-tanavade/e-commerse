import React from 'react'
import { Link } from 'react-router-dom'

function Products({ products }) {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products?.map(product => {
                            return <Link to={`/products/${product.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" key={product.id}>
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={product.image} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                    <p className="mt-1">${product.price}</p>
                                </div>
                            </Link >
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Products