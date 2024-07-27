import React, { useState } from "react";
import ProductService from "../services/ProductService";


let ProductCart = () => {

    let [state, setState] = useState({
        products : ProductService.getAllProducts()
    });

    let {products} = state;

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Product Cart</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto natus optio autem eius at architecto necessitatibus odio quis totam culpa, ratione tempora eum omnis aliquid suscipit aut error consequatur nisi.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        {
                            products.map((product) => {
                                return(
                                    <div key={products.sno} className="card shadow-lg mt-3">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <img src={product.image} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h5 className="display-4">{product.name}</h5>
                                                    <h6 className="display-6">&#8377;{product.price.toFixed(2)}</h6>
                                                    <h6 className="display-6">
                                                        {
                                                            product.qty >= 10 && <span className="text-success">Available</span>
                                                        }
                                                        {
                                                            product.qty <= 10 && product.qty >= 1 && <span className="text-warning">Almost Out-of Stock</span>
                                                        }
                                                        {
                                                            product.qty == 0 && <span className="text-danger">Out of Stock</span>
                                                        }
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
};

export default ProductCart;