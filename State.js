import React,{PureComponent} from 'react'
import {Component} from 'react'

class State extends Component{
    constructor(){
        super()
        this.state = {
            name: 'hi how are you'

    }
}

changeMassage(){
    this.setState({
        name: 'thank you'
    })
}
render(){
  return (
    <div><h1>{this.state.name}</h1>
    <button onClick={()=> this.changeMassage()}>click</button>
    </div>
  )
}
}
export default State