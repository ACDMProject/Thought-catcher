import React from "react";
import "./App.css";

import MoodScriber from "./components/MoodScriber";
import Definitions from "./components/Definitions";
import Home from "./components/Home_Page/Home";
import Diary from "./components/diary/Diary";
import LandingPage from "./components/Login/LandingPage";
import Login from "./components/Login/LandingPage";
import Register from "./components/Login/Register";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	HashRouter,
} from "react-router-dom";

function App() {
	// const Home = () => (
	// 	<div>
	// 		<Home />
	// 	</div>
	// );

	return (
		<HashRouter basename="/">
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/home" exact component={Home} />
					<Route path="/moodscriber" component={MoodScriber} />
					<Route path="/diary" component={Diary} />
					<Route path="/definitions" component={Definitions} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
