import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Car from "./components/Car";
import { Switch, Route } from "react-router-dom";

function Router() {
	return (
		<Switch>
			<Route exact path="/About" component={About} />
			<Route path="/car/:id" component={Car} />
			<Route path="/" component={Home} />
		</Switch>
	);
}

export default Router;
