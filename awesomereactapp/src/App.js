import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import DataGeneration from "./Menu/DataGeneration";
import AggregationTime from "./Menu/AggregationTime";
import axios from "axios";
import React from "react";
import {createStore} from 'redux'

const test = {loginStatus: 0};

export default class AppComponent extends React.Component {
    reduxStore = createStore(this.loggedInReducer, test);

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: 0,
        };
        this.reduxStore.subscribe(()=> console.log(this.reduxStore.getState()));
    }

    returnUserStatus() {
        if (this.state.loggedIn === 1) {
            return {
                type: "userLogin",
            }
        } else {
            return {
                type: "userNotLoggedIn",
            }
        }
    }


    loggedInReducer(state, action) {
        switch (action.type) {
            case "userLogin":
                return {loginStatus: 1};
            case "userNotLoggedIn":
                return {loginStatus: 0};
            default:
                return state;
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({loggedIn: 1});
                    console.log(res);
                    this.reduxStore.dispatch(this.returnUserStatus())
                } else if (res.status === 500) {
                    this.setState({loggedIn: 0});
                    console.log(res);
                    this.reduxStore.dispatch(this.returnUserStatus())
                }
            }).catch(err => console.log(err));
    }
    render() {
        return (
            <>
                <Router>
                    <nav className={'nav'}>
                        <ul>
                            <li><Link to={"/generation"}>Generate dummy data</Link></li>
                            <li><Link to={"/aggregation"}>Get data aggregation time</Link></li>
                        </ul>
                    </nav>
                    <Route path="/generation" component={DataGeneration}/>
                    <Route path="/aggregation" component={AggregationTime}/>
                </Router>
            </>
        );
    }
}
