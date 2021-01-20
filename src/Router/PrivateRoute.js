import { Route, Redirect } from 'react-router-dom';
import { auth } from '../firbase'

const PrivateRoute = ({ path, component }) => {
    // const isAuthentication = localStorage.getItem("isLoggedIn");
    const isAuthentication = auth.currentUser;
    console.log('Auithentication >>> ', isAuthentication)

    const Component = component;
    return <Route path={path}
        render={() => {
            if (isAuthentication) {
                return <Component />
            } else {
                return <Redirect to="/" />
            }
        }}
    />
}

export default PrivateRoute;