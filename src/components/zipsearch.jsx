import React, {useEffect, useState} from "react";
import axios from "axios";

    const Zipsearch = ((props) => {
        const[zipCode, setZipCode] = useState(11210);
        
        useEffect(()=> {
            async function fetchZipCode(){
                try {
                    setZipCode(props.zipcode);
                    const area = await axios.get('https://zip-api.eu/api/v1/info/US-${zipCode}');
                } catch (error) {
                    console.error(error);
                    
                }
            }
            fetchZipCode()
        },[])
    console.log(props);
    return (
        <div>
        <label>
        Zip Code: <input name="zipcode" />
      </label>
            {/* <h1>{props.zipcode}</h1>
            
            {area.map(pokemon=>{3
                return <p key={pokemon.url}>{pokemon.name}</p>
            })} */}
        </div>

    );
});


export default Zipsearch;