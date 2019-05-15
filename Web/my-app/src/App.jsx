import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import { RouteWithSubRoutes } from './routes/RouteConfig';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
      </div>
    );
  }
}

export default App;
