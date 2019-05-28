import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export const RouteWithSubRoutes = (route) => 
        // !route.private ?  
        <Route
            path={route.path}
            render={props => 
                <route.component {...props} routes={route.routes}/>
            }
        />
        // :
        // <PrivateRoute 
        //     path={route.path}
        //     render={props => 
        //         <route.component {...props} routes={route.routes}/>
        //     }
        // />
