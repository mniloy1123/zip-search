import React, {useEffect, useState} from "react";
import axios from "axios";

    const Zipsearch = ((props) => {
        const[zipCode, setZipCode] = useState(11210);
        const [city, setCity] = useState("");
        const [inputValue, setInputValue] = useState("");
        useEffect(()=> {
            async function fetchZipCode(){
            try {
                const area = await axios.get(`https://zip-api.eu/api/v1/info/US-${zipCode}`);
                console.log(area);
                setCity(area.data.place_name)
                return area
            } catch (error) {
                console.error(error);
                
            }
        }
            fetchZipCode(); 
        })
        const handleSubmit = () => {
            setZipCode(inputValue);
            console.log(inputValue)
            console.log(city)

        }


    return (
        <div>
        <label>
        Zip Code: <input type='number' value={inputValue}  name="zipcode" onChange={(e) => setInputValue(e.target.value)}/>

        <button onClick={handleSubmit}>submit
        </button>

      </label>
      <p>The city of the zipcode: {zipCode} is {city} </p>
        </div>

    );
});


export default Zipsearch;