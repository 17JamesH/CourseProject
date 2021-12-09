import React, { useState } from "react";
import Stars from "./Stars";
import Checkbox from "./Checkbox";
import SearchResult from "./SearchResult";

const Search = () => {
    const entryIds = ["street", "zip", "propertyType", "city", "price", "price2", "bedroom", "bathroom"]
    const [result, setResult] = useState([]);
    console.log(result);

    const collectInputs = () => {
        return Object.fromEntries(entryIds.map(entry => {
            console.log()
            let value = document.querySelector(`#${entry}`).value.toLowerCase();
            if(["zip", "price", "price2", "bedroom", "bathroom"].includes(entry))
                value = parseInt(value);
            if(value === 'all')
                value = null;
            return [entry, value]
        }))
    }
    const search = async () => {
        console.log("Searching");
        const inputs = collectInputs();
        console.log(inputs);
        fetch('https://housing-data-cs-427-uiuc.s3.us-west-2.amazonaws.com/housingdata.json')
        .then(response => response.json())
        .then(data => setResult(data.filter(
            data => (inputs.street? data.street.toLowerCase().includes(inputs.street) : true)
                && (inputs.zip? data.zip === inputs.zip : true)
                && (inputs.propertyType ? data.type.toLowerCase().includes(inputs.propertyType) : true)
                && (inputs.price ? data.price >= inputs.price : true)
                && (inputs.price2 ? data.price <= inputs.price2 : true)
                && (inputs.bedroom ? data.bed === inputs.bedroom : true)
                && (inputs.bathroom ? data.bath === inputs.bathroom : true)
                && (inputs.city ? data.city.toLowerCase() === inputs.city : true)
        )));
    }

    return(
        <div className="searching">
        <div class="container">
            <form action="" class="form">
                <div class="input-group">
                    <label for="location" class="input-label">Location</label>
                    <input type="text" class="input" id="street" placeholder="Street"/>
                    <input type="text" class="input" id="city" placeholder="City"/>
                    <input type="text" class="input" id="zip" placeholder="ZIP Code"/>
                </div>

                <div class="input-group">
                    <label for="propertyType" class="input-label">Property Type</label>
                    <select class="options" id="propertyType">
                        <option value={undefined}> All </option>
                        <option value="multi-family">Multi-Family</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="single family">Single Family</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="price" class="input-label"> Price</label>
                    <Stars/>

                    <select class="options" id="price">
                        <option selected value="no min">no min</option>
                        <option value={100000}>$100k</option>
                        <option value={200000}>$200k</option>
                        <option value={500000}>$500k</option>
                        <option value={1000000}>$1000k</option>
                    </select>
                    <select class="options" id="price2">
                        <option selected value="no max">no max</option>
                        <option value={1000000}>$1000k</option>
                        <option value={2000000}>$2000k</option>
                        <option value={5000000}>$5000k</option>
                        <option value={8000000}>$8000k</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="bedroom" class="input-label">Bedroom</label>
                    <Stars/>

                    <select class="options" id="bedroom">
                        <option value={null}> All </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5+</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="bathroom" class="input-label">Bathroom</label>
                    <Stars/>

                    <select class="options" id="bathroom">
                        <option value={null}> All </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3+</option>

                    </select>
                </div>
            </form>
            <button 
                    class="search_btn"
                    onClick={() => search()}
                >
                    Search
            </button>
        </div>
        <SearchResult data={result} />
    </div>
    );
}

export default Search;