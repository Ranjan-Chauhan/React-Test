import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import ItemDetails from './component/ItemDetails'
// import SupplierDetails from './component/SupplierDetails'
import SubmitedData from './component/SubmitedData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <ItemDetails/>
     {/* <SupplierDetails/> */}
     {/* <SubmitedData/> */}
    </>
  )
}

export default App
