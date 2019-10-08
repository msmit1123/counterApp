/**
 * Import Node Modules
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Import other Dependencies
 */
//CSS
import './styles.scss'

class NumInput extends React.Component{
   handleChange = (event) => {this.props.onChange(event)}

    render(){
        return (
            <input className="number-input" type="number" value={this.props.value} onChange={this.handleChange} />
        )
    }
}


/**
 *  Define component PropTypes
*/
NumInput.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

/**
 *  Export the component
 */
export default NumInput



