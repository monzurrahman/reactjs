import { useState } from "react";


function Random(){
    console.log("Random function executed");
    return Math.random();
}

export default function State(){

    let[count, setCount]= useState(Random()) // if we use Random only instead of Random() then console.log= "Random funciton executed" will display once 
    let inState=()=>{
        setCount((currentVal)=>{
            return currentVal +1;
        })

        setCount(currentVal=>{
            return currentVal +1;
        })
        //console.log(count);
    }

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={inState}>Click Here</button>
        </>
    )
}
// o/p: Count: 2.6694033393291257
