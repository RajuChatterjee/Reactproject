// import React, { Component } from 'react'

// class Counter extends Component {
//   render() {
//     return (
//       <div>   
//             <h1>{this.props.number}</h1>
//       </div>
//     )
//   }
// }export default Counter
import React, { Component } from 'react'

class Counter extends Component {
    componentDidUpdate(prevprops,prevstate) {

        console.log(prevprops)
        console.log(this.props.number)
        if(prevprops.number !==this.props.number){
            console.log("component is updated")

        } 
    
    }

    
  render() {
    return (
      <div>   
            <h1>{this.props.number}</h1>
      </div>
    )
  }
}
export default Counter