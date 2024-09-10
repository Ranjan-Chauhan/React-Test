// import React from "react";
import Button from "@mui/material/Button";

const ItemInput = () => {
  return (

    
    <div className="w-10/12 mx-auto my-2">
      <div className="bg-blue-100  p-6 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center ">Item Details</h1>
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 ">
          <div>
            <label>Item Name</label>
            <input
              type="text"
              placeholder="Enter Item Name"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div className="">
            <label>Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div className="">
            <label>Unit Price</label>
            <input
              type="number"
              placeholder="Enter unit Price"
              className="w-full p-2 border rounded-lg mt-1 "
            />
          </div>
          <div className="">
            <label>Date of Submission</label>
            <input type="date" className="w-full p-2 border rounded-lg mt-1 " />
          </div>
        </div>
      </div>
      <div className="space-y-5">
      <Button variant="contained">Submit</Button>
      </div>
     
      </div>
  );
};

export default ItemInput;
