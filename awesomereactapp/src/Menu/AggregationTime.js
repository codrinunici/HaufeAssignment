import React from 'react';
import axios from 'axios';

export default class AggregationTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        };

    }

    componentDidMount() {
        axios.get(`http://localhost:4000/greeting`)
            .then(res => this.setState({response: res.data +" milliseconds"})).catch(err => console.log(err));
    }
    render() {
        return (
            <>
                <p>{this.state.response}</p>
            </>
        )
    }
}
