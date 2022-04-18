import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPeople } from '../redux/Listner/listner';

class People extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPeople()
    }

    render() {
        console.log('props are', this.props)
        return (
            <div id="personContainer">
                <h1>People Fetcher</h1>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: () => dispatch(fetchPeople())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);