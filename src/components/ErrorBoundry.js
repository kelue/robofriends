import React, {Component} from "react";

class ErrorBoundry extends Component {
        
    constructor({props}){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })    
    }


    render(){
        const {hasError} =this.state;
        const {props} = Component;
        if(hasError){
            return <h1>Sorry, there seems to be a problem</h1>
        }
        return props.children;
    }
}

export default ErrorBoundry;