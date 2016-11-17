import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';
import Home from './containers/home.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
    </Route>
);

export default routes;
