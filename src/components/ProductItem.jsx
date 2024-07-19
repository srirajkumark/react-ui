import React, { useState } from "react";


let ProductItem = () => {

    let [state, setState] = useState({
        product : {
            sno : 'AA001',
            image : 'https://www.boat-lifestyle.com/cdn/shop/files/WaveElevatePro-FI_Orange01.png?v=1697013443',
            name : 'Mi Watch',
            price : 15000,
            qty : 2
        }
    });

    let {product} = state;

    let incrQty = () => {
        setState(() => ({
            product: {
                ...state.product,
                qty : state.product.qty + 1
            }
        }));
    };

    let decrQty = () => {
        setState(() => ({
            product: {
                ...state.product,
                qty : state.product.qty - 1 > 0 ? state.product.qty - 1 : 1
            }
        }));
    };


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Product Item</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aut molestias. Rem libero perferendis dignissimos quod unde distinctio nostrum illum.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead>
                                <tr>
                                    <th className="bg-dark text-white">SNO</th>
                                    <th className="bg-dark text-white">Image</th>
                                    <th className="bg-dark text-white">Name</th>
                                    <th className="bg-dark text-white">Price</th>
                                    <th className="bg-dark text-white">Qty</th>
                                    <th className="bg-dark text-white">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} alt="" width={40} height={40}/>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i onClick={decrQty} className="fa fa-minus-square mx-1"></i>
                                            {product.qty}
                                        <i onClick={incrQty} className="fa fa-plus-square mx-1"></i>
                                    </td>
                                    <td>{product.qty * product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductItem;