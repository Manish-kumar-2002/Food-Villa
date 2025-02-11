import {Component} from "react"
class ChildClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:1,
            countTwo:2,
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
        const {count,countTwo} = this.state
        return(
        <div className="container py-10">Child Class {this.props.name} {this.props.xyz}  {this.state.userInfo.name} {this.state.userInfo.login} {this.state.count} <button className="" onClick={() => this.setState({ count: this.state.count + 1 })} >Click me </button></div>
           
        )        
    }
}

export default ChildClass