import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { routes } from './routes/routes';
// import { history } from './_helpers/history';
// import { alertActions } from './_actions/alert.actions';
import { RouteWithSubRoutes } from './routes/RouteConfig';
// import { connect } from 'react-redux';

import './App.css';
import Menu from './common/Menu/Menu';

class App extends Component {
//   constructor(props) {
//     super(props);
// }

  render() {
    return (
      <div className="App">
        <Menu url={window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}/>

				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { alert } = state;
//   return {
//       alert
//   };
// }

// const connectedApp = connect(mapStateToProps)(App);
export default App; 
