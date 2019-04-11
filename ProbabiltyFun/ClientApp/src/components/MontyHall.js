import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/MontyHall';

class MontyHall extends Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        
    }

    componentWillReceiveProps(nextProps) {
        // This method runs when incoming props (e.g., route params) change
        
    }

    render() {
        return (
            <div>
                <h1>Monty Hall</h1>
            </div>
        );
    }
}


export default connect(
    state => state.montyHall,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(MontyHall);
