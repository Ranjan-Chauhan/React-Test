import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Button from "@mui/material/Button";
import { Input } from '@mui/material';


const SupplierDetails = () => {

    const [states, setStates] = useState([])
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState()
    const [supplierName, setSupplierName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('') 
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([])
    
      


    // const fetchStates = async (states) => {
    //     try {
    //         const response = await axios.get(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=%3CcountryId`)
    //         setStates(response.data.states)
    //     } catch (error) {
    //         console.log("states fetching error: ", error);
    //     }
    // }

    // const fetchCountry = async (country) => {
    //     try {
    //         const response = await axios.get(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList`)
    //         setCountry(response.data.country)
    //     } catch (error) {
    //         console.log("error in fetching country: ", error);
            
    //     }
    // }

   useEffect(() => {
     const fetchCountries = async () => {
        try {
            const response = await fetch("https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList");
            
            if (!response.ok) {
                throw new Error(`Http Error! : status:${response.status}`);
            }
            
            const data = await response.json();
            setCountry(data.data.countyList);
            setLoading(false);

        } catch (error) {
            console.log("error while fetching data",error);
            setLoading(false);
        }
     }
   
     fetchCountries();
   }, [])
   
//    console.log(country)

const SubmitInput = (e) => {
  e.prevenDefault();
  
   const formData = {
    supplierName,
    companyName,
    selectedCountry,
    states,
    city,
    email
   }

   setData([...data, formData])

}

useEffect( 
  ()=> {
    console.log(data);
  }
  , [data]
)

// console.log(data);


  return (

    
   


    <div>
         <div className="w-10/12 mx-auto my-2">
      <form onSubmit={SubmitInput} className="bg-blue-100  p-6 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center ">Supplier Details</h1>
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 ">
          <div>
            <label>Supplier Name</label>
            <input   
              type="text"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              placeholder="Enter Supplier Name"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div>
            <label>Company Name</label>
            <input  
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div className='flex flex-col space-y-3 '>
          <label>Country</label>
          <select>
            <option value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}></option> 
            {country.map((country) => (
                <option key={country.countryId} value={country.countryId}>
                    {country.name}
                </option>
            ))}
            
            </select>
          </div>
          <div>
            <label>State</label>
            <input   
            type="text" 
            value={states}
            onChange={(e) => setStates(e.target.value)}
            className="w-full p-2 border rounded-lg mt-1 " 
            />
          </div>
          <div>
            <label>City</label>
            <input
             id='city'   
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div>
            <label>Email Address</label>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              id='phone'            
              type="text"
              placeholder="Enter Email Address"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
        </div>
        {/* <Button variant="contained " type='submit'>Submit</Button> */}
        <input type='submit' />
      </form>
      
    </div>
    </div>
  )
}

export default SupplierDetails