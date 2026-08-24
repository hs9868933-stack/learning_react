// import { useState } from 'react'

import './App.css'
// import Navbar from "./Navbar";
import Productcard from "./Productcard";
import Counter  from './Counter';
function App() {return (<>
  <Productcard name="Iphone" description="Mobile Phone " price={93000} avai={true}/>
  <Productcard name="Samsung s26" description="Mobile Phone " price={93000} avai={false}/>
  <Productcard name="Realme GT 6T" description="Mobile Phone " price={93000} avai={true}/>
  
  
  <Counter/>


  </>
  )
}

export default App