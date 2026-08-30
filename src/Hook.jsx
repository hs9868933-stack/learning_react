import { useEffect, useState } from "react";

function Hook(){

    const[count,setcount]=useState(0);

    function handleClick(){
        setcount(count+1);
    }

    useEffect()

    return(
        <>
        <h1> count :</h1>
        <button onClick={handleClick}> INCREMENt </button>
        </>
    )


}

export default Hook
