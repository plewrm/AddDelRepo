import React,{useState,useEffect} from 'react'

const DataProps = () => {
    const [tog,setTog]=useState(false)

  return (
    <div>
    {   
        tog ? "Welcome" : null
        }
    <button onClick={()=>setTog(!tog)}>Toggle</button>
    </div>
  )
}

export default DataProps


// import React, { useState, useEffect } from "react";

// const DataProps = () => {
//   function CallData(info) {
//     alert(info);
//   }
//   return (
//     <div>
//       <ChildFub getData={CallData} />
//     </div>
//   );
// };

// export default DataProps;

// const ChildFub = (props) => {
//   const info = "Read this information Please...";

//   return (
//     <div>
//       <button onClick={() => props.getData(info)}>Click</button>
//     </div>
//   );
// };
