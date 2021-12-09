import React from "react";
import Stars from "./Stars";
import Checkbox from "./Checkbox";

const Search = () => {
    const entryIds = ["street", "zip", "property_type", "price", "price2", "bedroom", "bathroom"]
    const search = async () => {
        fetch('https://housing-data-cs-427-uiuc.s3.us-west-2.amazonaws.com/housingdata.json')
        .then(response => response.json())
        .then(data => console.log(data));
        entryIds.forEach(() => {
        })
    } 

    return(
        <div className="searching">
        <div class="container">
            <form action="" class="form">
                <div class="input-group">
                    <label for="location" class="input-label">Location</label>
                    <input type="text" class="input" id="street" placeholder="Street"/>
                    <input type="text" class="input" id="zip" placeholder="ZIP Code"/>
                </div>

                <div class="input-group">
                    <label for="property_type" class="input-label">Property Type</label>
                    <select class="options" id="property_type">
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="singlefamily">Single Family</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="price" class="input-label"> Price</label>
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
                    <label for="bedroom" class="input-label">Bedroom</label>
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
                    <label for="bathroom" class="input-label">Bathroom</label>
                    <Stars/>

                    <select class="options" id="bathroom">
                        <option value="0">1</option>
                        <option value="0">2</option>
                        <option value="0">3+</option>

                    </select>
                </div>




                <button type="submit" class="search_btn">Search

                </button>
            </form>
        </div>

    </div>
    );
}

export default Search;