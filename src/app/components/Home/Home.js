import Helmet from 'react-helmet';

const Home = () => (
    <div>
        <Helmet
            title="Welcome Home"
            meta={[
                {"name": "description", "content": "CSP React Starter"},
                {"property": "og:type", "content": "landing"}
            ]}
        />
        <h1>Welcome Home</h1>
    </div>
);

export default Home;
