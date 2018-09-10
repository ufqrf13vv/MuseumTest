import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_DATA } from '../../actions'
import json from '../../helpers/data.json'
import Table from '../Table'
import NewElement from '../NewElement'

class App extends Component {

    constructor(props) {
		super(props)
		this.props.GET_DATA(json)
	}

    render() {
        const { data } = this.props

        return (
            <div className="App">
                <Table data={data} />
                <NewElement />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = {
    GET_DATA
};

export default connect( mapStateToProps, mapDispatchToProps)(App);