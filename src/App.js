import React from "react";
import "./App.css";
import About from "./components/About";
import Inputs from "./components/Inputs";
import Definitions from "./components/Definitions";
import Home from "./components/Home_Page/Home";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	// const Home = () => (
	// 	<div>
	// 		<Home />
	// 	</div>
	// );

	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/home" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/inputs" component={Inputs} />
					<Route path="/definitions" component={Definitions} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
