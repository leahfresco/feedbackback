import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/Landing.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div id="app">
					<Header />
					<Route exact path="/surveys" component={Dashboard} />
					<div className="container">
						<Route path="/surveys/new" component={SurveyNew} />
						<Route exact path="/" component={Landing} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
