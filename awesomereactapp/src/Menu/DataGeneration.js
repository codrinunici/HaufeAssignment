import React from 'react';
import axios from 'axios';

export default class AggregationTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        };

    }

    postDummyData = () => {
        axios.post(`http://localhost:4000/greeting`, {"salutation": "howdy"})
            .then(res => console.log(res)).catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <button onClick={this.postDummyData}>Say Howdy</button>
                <p>{this.state.response}</p>
            </>
        )
    }
}
