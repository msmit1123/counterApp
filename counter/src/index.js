/**
 * Import Node Modules
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import other dependencies
 */
//CSS
import './index.scss'

/**
 * Import Components
 */
import Button from './components/Button'
import NumInput from './components/NumInput'


class Counter extends React.Component{
    constructor(props){
        super(props);
        
        //set initial state
        this.state = {
            value: 0
        }

        //bind event handlers
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    /**
     * Create state behaviors 
     */
    
    //Set value limits. In this case, 0 or higher
    checkValue(val){
        if(val === ''){return 0}
        return val < 0 ? 0 : val;
    }

    increment(){
        this.setState((prevState) => {
            var newVal = this.checkValue(parseInt(prevState.value) + 1);
            return {value: newVal}
        })
    }

    decrement(){
        this.setState((prevState) => {
            var newVal = this.checkValue(parseInt(prevState.value) - 1);
            return {value: newVal}
        });
    }

    handleChange(event){
        var newVal = this.checkValue(event.target.value);
        this.setState({value: newVal})
    }
    


    render(){
        return(
            <div className="counter">
                <Button onClick={this.decrement}>-</Button>
                <NumInput value={this.state.value} onChange={this.handleChange} />
                <Button onClick={this.increment}>+</Button>
            </div>
        )
    }
}




ReactDOM.render(<Counter />, document.getElementById('root'));
