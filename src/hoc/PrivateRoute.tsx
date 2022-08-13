import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: any;
}


// Used it for Trade component, but then I understand that only need disable input field if user is anuthenticated
export const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
    const routeComponent = (props: any) => {
        const user = JSON.parse(localStorage.getItem('user') as string);
        return user ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{ pathname: '/signin' }} />
        );
    };
    return <Route {...rest} render={routeComponent} />;
};
