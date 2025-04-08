import { useState } from "react";
export default function State(){
   // count =0;
    let[count, SetCount] = useState(0)

  

    let inState=()=> {
        SetCount(count +1)
        SetCount(count +1)
        SetCount(count +1)
        SetCount(count +1)
                    }
  // it will return only 1 increament , not exactly 4. SetCount is asyncronous function. It'll work like return of a function

return (
    <>
        <h1>Count {count}</h1>
        <button onClick={inState}>Count</button>
    </>

)
 }
