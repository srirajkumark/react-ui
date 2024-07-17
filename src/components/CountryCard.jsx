import React from "react";
import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';


let CountryCard = () => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div class="card shadow-lg">
                            <img src={image1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3>Building</h3>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card shadow-lg">
                            <img src={image2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3>Green Lake</h3>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card shadow-lg">
                            <img src={image3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3>Sunset</h3>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card shadow-lg">
                            <img src={image4} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3>Pyramids</h3>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-dark btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
};

export default CountryCard;