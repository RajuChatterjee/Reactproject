// import React, { Component } from 'react'


// function Counter1({ number }) {
  
//     return (
//       <div><h1>{number}</h1>
//       </div>
//     );
//   }

// export default  Counter1

import React, { Component, useEffect } from 'react'


function Counter1({ number }) {
  useEffect(() => {
    console.log("funtional component}")
  },[number])

    return (
      <div><h1>{number}</h1>
      </div>
    );
    }

export default  Counter1