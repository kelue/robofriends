import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: '' // sets initial state for the search bar
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json();})
        .then(users=>{this.setState({robots: users})})
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value }) //updates the App component on the letters in the searchbox by reporting events changes i.e letters typed  in
    }
    
    
    render(){
        const {robots, searchfield} = this.state;

        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }) //filters the robots using the input from the search bar

        if(!robots.length){ //robots.length evaluates to false when it equals zero so we swap it to true 
            console.log('0')
            return <h1 className='tc'>Loading...</h1>
        }else{
            console.log('array: ' + filteredrobots)
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onsearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredrobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}



export default App;