import { useState } from "react";

function  Counter(){
    // let count=0;    //react dont now variable change so we use state ( those variable whose value changes)

    const[count,setcount]=useState(0);

    function handleClick(){
        // setcount(count+1);
        // setcount(count+1);    //only incerease by 1 

        // if use two setcount

        setcount(prev=>prev+1);
        setcount(prev=>prev+1);
        setcount(prev=>prev+1);

        console.log(count);
    }

    const[name,setname]=useState("vaibhav");
    function handleName(){

        setname(name=="vaibhav"?"harshit":"vaibhav")



    }
    return(
        // <div  className="cout">
        <>
        <h1> count : {count}</h1>
        <button onClick={handleClick}> ADD </button>

        <h1> name: {name}</h1>
        <button onClick={handleName}>Chnage name</button>
        </>
        // </div>
    )
} 

export default Counter