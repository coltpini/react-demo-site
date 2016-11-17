import style from './SiteHeader.css';
import SiteNav from '../SiteNav/SiteNav.js';
import classNames from 'classnames';
import {IndexLink} from 'react-router';

export default ({links = [], className=""}) => (
    <header className={classNames(style.header, className)}>
        <IndexLink to="/" className={style.brand}>
            <span>My website</span>
        </IndexLink>
        <SiteNav className={style.nav} links={links} />
    </header>
);
