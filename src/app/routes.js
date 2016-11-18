import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';

import Landing from './containers/landing.js';

const routes = (
    <Route path="/" component={App} >
        <IndexRoute component={Landing} />
    </Route>
);

export default routes;
