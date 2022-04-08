import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = (state) => { //this functions points the property in constructor to the pure function in the reducer which can change its state 
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) => { //this maps the action a function that detects change in the property so that it can be updated
    return {
        onsearchChange: (event) =>  dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())  
    };
}


class App extends Component {

    componentDidMount() {
       this.props.onRequestRobots();
    }
    
    
    render(){
        const {searchField, onsearchChange, robots, isPending} = this.props; //passed down as props from the store through connect params

        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }) //filters the robots using the input from the search bar

        if(isPending){ //isPending is true then loading wil be displayed 
            return <h1 className='tc'>Loading...</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onsearchChange}/>
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



export default connect(mapStateToProps, mapDispatchToProps)(App);