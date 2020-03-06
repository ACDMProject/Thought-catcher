import React from "react";
import "./App.css";
import About from "./components/About";
import Inputs from "./components/Inputs";
import Definitions from "./components/Definitions";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/inputs" component={Inputs} />
					<Route path="/definitions" component={Definitions} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h3>Home Page</h3>
	</div>
);

export default App;
