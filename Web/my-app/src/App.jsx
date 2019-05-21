import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import { RouteWithSubRoutes } from './routes/RouteConfig';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        dispatch(alertActions.clear());
    });
}

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

const mapStateToProps = (state) => {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
