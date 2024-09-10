import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ItemInput from "./ItemInput";
import SupplierDetails from "./SupplierDetails";
import SubmitedData from "./SubmitedData";
import Footer from "./Footer";

const ItemDetails = () => {
  return (
    <div className=" ">
      <FormGroup>
        <div className="flex mx-auto items-center m-4">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Item"
          />
          <FormControlLabel control={<Checkbox />} label="Supplier" />
        </div>
      </FormGroup>
    <div className="space-y-16 ">
      <ItemInput/>
      <SupplierDetails/>
      <div className="flex w-11/12 border-spacing-3 justify-center mx-auto "><SubmitedData/></div>
      <Footer/>
      </div>
    </div>

  );
};

export default ItemDetails;
