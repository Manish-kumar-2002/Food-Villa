import {Component} from "react"
import ChildClass from "./ChildClass";
class ProfileClassBased extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:1,
            countTwo:2
        }
        console.log("constructor");
        
    }

    componentDidMount(){
        this.startTimer = setInterval(()=>{
            console.log("startClass");   
        },1000)
        console.log("componentDidMount");   
    }


    componentDidUpdate(prevProps,prevState){

    }

    componentWillUnmount(){
        clearInterval(this.startTimer)
        console.log("componentWillUnmount");
        
    }


    render(){
        console.log("render()");
        const {count,countTwo} = this.state
        return(
       <div>
         <div className="container py-10">Profile Class {this.state.count} <button className="" onClick={() => this.setState({ count: this.state.count + 1 })} >Click me</button></div>
         <ChildClass name={"childprops"} xyz="abc" />
       </div>
        )        
    }
}

export default ProfileClassBased