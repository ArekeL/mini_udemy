import React from "react";

import StorProvider from "./store/StorProvider";

import "./App.scss";

const App = () => {
	return (
		<StorProvider>
			<div className='App'>
				<h1>Hello World</h1>
				<p>Time for new project</p>
			</div>
		</StorProvider>
	);
};

export default App;
