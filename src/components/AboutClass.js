import React from "react";
import ChildClass from "./ChildClass";

class AboutClass extends React.Component{

    constructor(props){
        super(props)
        // define state variable in Class Component
        this.state={
            countOne:1,
            countTwo:2,
        }
        console.log("Parent constructor()");  
    }


    componentDidMount(){
        this.setHiParent=setInterval(()=>{
            console.log("Hi Parent");
        },1000)  
        console.log("Parent componentDidMount()");  
    }


    componentDidUpdate(prevProps,prevState){}

    componentWillUnmount(){
        clearInterval(this.setHiParent)
        console.log("componentWillUnmount");
    }


    render(){
        console.log("Parent class render()");
        
        // destructing of state variable
        const {countOne,countTwo} = this.state
        return(
            <div className="p-4">
            <h1>About Class</h1>
            <div>{countOne} <button className="mb-2 pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500" onClick={() => this.setState({ countOne: countOne + 1 })}>click me</button> </div>
            <div>{countTwo} <button className="pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500" onClick={()=>this.setState({countTwo:countTwo+1})}>click me</button> </div>
            <ChildClass />
            </div>
        )
    }
}

export default AboutClass