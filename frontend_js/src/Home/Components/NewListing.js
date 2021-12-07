import React from "react";

const NewListing = () =>{
    return(
        <>
            <div className="sales">
                <div className="container">
                    <h5 className="section-head">
                        <span className="heading">NEW LISTING</span>
                        <span className="sub-heading">view all listing in the last week</span>
                    </h5>
                </div>
                <div className="grid">
                    <div className="grid-item featured-house">
                        <img src={"../../../images/house1.jpg"} alt={""} className="house-image"/>
                            <h3 className="sale-price">From $500k</h3>
                            <div className="bed-bath">
                                4 bed 4bath 150 sqm
                            </div>
                            <div className="address">
                                411 park Ave, SAN JOSE, CA 95110
                            </div>
                            <a className="btn btn-gradient" href={"/"}> Take a look
                                <span className="dots"><i className="fas fa-ellipsis-h"></i></span>
                            </a>
                    </div>

                    <div className="grid-item featured-house">
                        <img src={"../../../images/house2.jpg"} alt={""} className="house-image"/>
                            <h3 className="sale-price">From $730k</h3>
                            <div className="bed-bath">
                                6 bed 4bath 210 sqm
                            </div>
                            <div className="address">
                                411 park Ave, SAN JOSE, CA 95110
                            </div>
                            <a href="#" className="btn btn-gradient">Take a look
                                <span className="dots"><i className="fas fa-ellipsis-h"></i></span>
                            </a>
                    </div>

                    <div className="grid-item featured-house">
                        <img src = {"../../../images/house3.jpg"} alt={""} className="house-image"/>
                            <h3 className="sale-price">From $350k</h3>
                            <div className="bed-bath">
                                4 bed 2bath 110 sqm
                            </div>
                            <div className="address">
                                411 park Ave, SAN JOSE, CA 95110
                            </div>
                            <a href={""} className="btn btn-gradient">Take a look
                                <span className="dots"><i className="fas fa-ellipsis-h"></i></span>
                            </a>
                    </div>
                </div>

            </div>

        </>
    );
}

export default NewListing;