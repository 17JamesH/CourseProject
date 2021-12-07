import React from "react";
import Stars from "./Stars";
import Checkbox from "./Checkbox";

const Search = () =>{
    return(
        <div className="searching">
        <div class="container">
            <form action="" class="form">
                <div class="input-group">
                    <label for="location" class="input-label">Location</label>
                    <input type="text" class="input" id="location" placeholder="City,Address,ZIP"/>
                </div>

                <div class="input-group">
                    <label for="property_type" class="input-label">Property Type</label>
                    <select class="options" id="property_type">
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="singlefamily">SingleFamily</option>
                    </select>
                </div>

                <h2 class="feature" >Feature </h2>

                <div class="input-group">
                    <input type="checkbox" value="PRICE"
                           name="check-genre" id="chkbox-price"  defaultChecked={true}/>
                    {/*<Checkbox/>*/}
                    <label for="chkbox-price" class="input-label chbox"> Price</label>

                    <Stars/>

                    <select class="options" id="price">
                        <option selected value="no min">no min</option>
                        <option value="100k">$100k</option>
                        <option value="200k">$200k</option>
                        <option value="500k">$500k</option>
                        <option value="1000k">$1000k</option>
                    </select>
                    <select class="options" id="price2">
                        <option selected value="no max">no max</option>
                        <option value="100k">$1000k</option>
                        <option value="200k">$2000k</option>
                        <option value="500k">$5000k</option>
                        <option value="1000k">$8000k</option>
                    </select>
                </div>

                <div class="input-group">
                    <input type="checkbox" value="BEDROOM"
                           name="check-genre" id="chkbox-bedroom" defaultChecked={true}/>
                    <label for="chkbox-bedroom" class="input-label chbox">Bedroom</label>

                    <Stars/>

                    <select class="options" id="bedroom">
                        <option value="0">1</option>
                        <option value="0">2</option>
                        <option value="0">3</option>
                        <option value="0">4</option>
                        <option value="0">5+</option>
                    </select>
                </div>

                <div class="input-group">
                    <input type="checkbox" value="BATHROOM"
                           name="check-genre" id="chkbox-bathroom"  defaultChecked={true}/>
                    <label for="chkbox-bathroom" class="input-label chbox">Bath</label>

                    <Stars/>

                    <select class="options" id="bathroom">
                        <option value="0">1</option>
                        <option value="0">2</option>
                        <option value="0">3+</option>

                    </select>
                </div>

                <div class="input-group">
                    <input type="checkbox" value="PARKINGSPACE"
                           name="check-genre" id="chkbox-parkingSpace"  defaultChecked={true}/>
                    <label for="chkbox-parkingSpace" class="input-label chbox">Parking Space</label>
                    <Stars/>
                    <select class="options" id="parkingSpace">
                        <option value="0">1</option>
                        <option value="0">2</option>
                    </select>
                </div>

                <div class="input-group">
                    <input type="checkbox" value="YEARBUILT"
                           name="check-genre" id="chkbox-yearBuilt"  defaultChecked={true}/>
                    <label for="chkbox-yearBuilt" class="input-label chbox">Year built</label>

                    <Stars/>

                    <select class="options" id="yearBuilt">
                        <option value="0">after 2010</option>
                        <option value="0">2000 - 2009</option>
                        <option value="0">1990 - 1999</option>
                        <option value="0">1980 - 1989</option>
                        <option value="0">before 1980</option>
                    </select>
                </div>

                <div class="input-group">
                    <input type="checkbox" value="SQUARE FEET"
                           name="check-genre" id="chkbox-squareFeet"  defaultChecked={true}/>
                    <label for="chkbox-squareFeet" class="input-label chbox">SQUARE FEET</label>
                    <Stars/>
                    <select class="options" id="lotSize">
                        <option value="0">under 1000</option>
                        <option value="0">1000 - 1499</option>
                        <option value="0">1500 - 1999</option>
                        <option value="0">2000 - 2499</option>
                        <option value="0">2500+</option>
                    </select>
                </div>


                <button type="submit" class="btn  form-btn btn-purple">Search
                    <span class="dots"><i class="fas fa-ellipsis-h"></i></span>
                </button>
            </form>
        </div>

    </div>
    );
}

export default Search;