import SiteHeader from '../SiteHeader/SiteHeader.js';


export default ({children, nav}) => (
    <div>
        <SiteHeader links={nav} />
        <main>{children}</main>
    </div>
);
