import {SET_SITE_NAV } from './reducers.js';
import getNav from './services.js';

function setNav( nav=[] ) {
    return { type: SET_SITE_NAV, nav };
}

export const init = () => dispatch =>
    getNav().then( n => dispatch( setNav(n)) );
