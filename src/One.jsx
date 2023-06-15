import React from "react"


class One extends React.Component {
    constructor(props){
        super(props)
        this.state = { ins: 'Haryana'}

    }
componentWillMount(){

}
    
componentDidMount(){

}

changeins(){
    this.setState({ins : "Jammu and Kashmir"})
    prompt('are you sure to change state')
}

render(){
    return(
        <>
        <h1>{this.state.ins}</h1>
        <button onClick={this.changeins.bind(this)} className="hello">StateName</button>

        </>
    )
}
}
export default One