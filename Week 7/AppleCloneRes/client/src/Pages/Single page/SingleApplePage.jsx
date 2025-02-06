import React, { useEffect, useState } from 'react'
import Error from '../Error/Error';
import { useParams } from 'react-router-dom';

function SingleApplePage() {
    const [products, setProducts] = useState([]);

    const {productID} = useParams();

    useEffect(()=>{
        fetch("http://localhost:3035/iphones")
        .then((res)=>res.json())
        .then((products)=>{
            console.log(products);
            const productList = products.products;
            const singleProduct = productList.filter(
            (product) => product.product_id == productID
            )
            setProducts(singleProduct)
        })
        .catch(() => console.log("Error: unable to fetch!"))
    }, [productID])

    if (products.length) {
        return (
            <>
                <section className='internal-page-wrapper'>
                    <div className='container'>
                        {products?.map((singleProduct)=>{
                            let id = singleProduct.product_id;
                            let title = singleProduct.product_url;
                            let img = singleProduct.product_img;
                            let brief = singleProduct.product.product_brief_description;
                            let startingPrice = singleProduct.starting_price;
                            let priceRange = singleProduct.price_range;
                            let details = singleProduct.product_description;
                            return (
                                <div key={id}>
                                    <div className="row justify-content-center">
                                        <div className="col-12 mt-5">
                                            <div className="title-wrapper font-weight-bond">{title}</div>
                                            <div className="brief-description">{brief}</div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center text-center product-holder h-100 m-5">
                                        <div className={`col-sm-12 col-md-6 auto`}>
                                            <div className="starting-price">{`Starting at ${startingPrice}`}</div>
                                            <div className="monthly-price">{priceRange}</div>
                                            <div className="product-detail">{details}</div>
                                            <div className={`col-sm-12 col-md-6`}>
                                                <div className="product-image">
                                                    <img src={img} alt="product" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section>
            </>
        )
    } else {
        return <Error />
    } 
}

export default SingleApplePage