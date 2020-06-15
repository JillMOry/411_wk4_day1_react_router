import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Car from "./components/Car";
import { Switch, Route } from "react-router-dom";

function Router() {
	return (
		<Switch>
			<Route path="/About" exact component={About} />
			<Route path="/" component={Home} />
			<Route path="/car/:id" component={Car} />
		</Switch>
	);
}

// Start Router function here //
export default Router;
