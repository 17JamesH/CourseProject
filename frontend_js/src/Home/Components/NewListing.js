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
                            <h3 className="sale-price">$ 899,000+</h3>
                            <div className="bed-bath">
                                2bed  2bath 1190 sq ft
                            </div>
                            <div className="address">
                                51 Innes Ct. #401, San Francisco, CA 94124
                            </div>
                    </div>

                    <div className="grid-item featured-house">
                        <img src={"../../../images/house2.jpg"} alt={""} className="house-image"/>
                            <h3 className="sale-price">$ 950,000</h3>
                            <div className="bed-bath">
                                5 bed 2.5 bath 2250 sq ft
                            </div>
                            <div className="address">
                                343 - 345 Russia Ave, San Francisco, CA 94112
                            </div>
                     </div>

                    <div className="grid-item featured-house">
                        <img src = {"../../../images/house3.jpg"} alt={""} className="house-image"/>
                            <h3 className="sale-price">$ 7,995,000</h3>
                            <div className="bed-bath">
                                4 bed 3.5 bath 4822 sq ft
                            </div>
                            <div className="address">
                                1230 Sacramento St, San Francisco, CA 94108
                            </div>

                    </div>
                </div>

            </div>

        </>
    );
}

export default NewListing;