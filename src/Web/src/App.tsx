import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { Hello } from "./components/Hello/Hello";

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<BreadcrumbsProvider>
						<Switch>
							<Route path={"/"}>
								<Hello message={"Testing TS with React and WDS"}></Hello>
							</Route>
						</Switch>
					</BreadcrumbsProvider>
				</Router>
			</React.Fragment>
		);
	}
}
