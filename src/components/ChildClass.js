import {Component} from "react"
class ChildClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:""
        }
        console.log("Child constructor");
        
    }

    async componentDidMount(){

        const response = await fetch("https://api.github.com/users/manish-kumar-2002")
        const data = await response.json();
        console.log(data);

        this.setState({
            userInfo:data
        }) 

        console.log("Child componentDidMount");   
    }
    render(){
        console.log("Child render()");
        return(
        <div className="container pt-3 pb-10">Child Class {this.props.name} {this.props.xyz}  {this.state.userInfo.name} {this.state.userInfo.login} </div>
           
        )        
    }
}

export default ChildClass