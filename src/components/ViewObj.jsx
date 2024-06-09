import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewObj = () => {

    const [product, changeProduct] = useState(
        { "products": [] }
    )

    const fetchData = () => {

        axios.get("https://dummyjson.com/products").then(

            (response) => {
                changeProduct(response.data)
            }

        ).catch().finally()
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {product.products.map(

                                (value, index) => {


                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src={value.thumbnail} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.id}</h5>
                                                <p class="card-text">{value.title}</p>
                                                <p class="card-text">{value.price}</p>
                                                <a href="#" class="btn btn-primary">Add to cart</a>
                                            </div>
                                        </div>



                                    </div>
                                }

                            )}


                        </div>


                    </div>
                </div>
            </div>



        </div>
    )
}

export default ViewObj