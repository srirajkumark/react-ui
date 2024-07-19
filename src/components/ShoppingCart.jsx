import React, { useState } from "react";


let ShoppingCart = () => {

    let [state, setState] = useState({
        products : [
            {
                sno : 'AA001',
                image : 'https://www.boat-lifestyle.com/cdn/shop/files/WaveElevatePro-FI_Orange01.png?v=1697013443',
                name : 'Mi Watch',
                price : 15000,
                qty : 2
            },
            {
                sno : 'AA002',
                image : 'data:image/jpeg;base64,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',
                name : 'Samsung Watch',
                price : 38000,
                qty : 2
            },
            {
                sno : 'AA003',
                image : 'data:image/jpeg;base64,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',
                name : 'Apple Watch',
                price : 45000,
                qty : 2
            },
            {
                sno : 'AA004',
                image : 'https://assorted.downloads.oppo.com/static/assets/products/oppo-watch-1/images/parameter/oppo-wacth3-f83f7022bdf1498497999a04c5952db6.png',
                name : 'Oppo Watch',
                price : 25000,
                qty : 2
            },
            {
                sno : 'AA005',
                image : 'https://www.boat-lifestyle.com/cdn/shop/files/2_c74d7f07-c10d-48ad-9da0-5e229499bad7.png?v=1694153692',
                name : 'Boat Watch',
                price : 11000,
                qty : 2
            }
        ]
    });

    let {products} = state;


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Shopping Cart</p>
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
                                {
                                    products.map((product) => {
                                        return(
                                            <tr key={product.sno}>
                                                <td>{product.sno}</td>
                                                <td>
                                                    <img src={product.image} alt="" width={40} height={40}/>
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <i className="fa fa-minus-square mx-1"></i>
                                                        {product.qty}
                                                    <i className="fa fa-plus-square mx-1"></i>
                                                </td>
                                                <td>{product.qty * product.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ShoppingCart;