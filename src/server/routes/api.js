import express from 'express';
import cors from 'cors';
const fetch = require('node-fetch');

export const router = express.Router();

router.get('/nav', cors(), (req, res) => {
    res.send([
        {
            "href": "/",
            "text": "Home"
        },{
            "href": "/link_1",
            "text": "link 1"
        },{
            "href": "/link_2",
            "text": "link 2"
        },{
            "href": "/link_3",
            "text": "link 3"
        },{
            "href": "/link_4",
            "text": "link 4"
        }
    ]);
});
router.get('/title', cors(), (req, res) => {
    res.send({title: "My Favorite Recipies"});
});

router.get('/articles',cors(), (req, res) => {
    fetch('https://hapi-demo-api.app.lds.org/api/recipe')
        .then( response => response.json())
        .then( articles => {
            res.send( articles.map( ({name: title, steps: teaser, imageURL: img}) => ({title, teaser: teaser[0], img}) ));
        })
        .catch((err) => {
            console.error(err);
            res.send([]);
        });
});

router.get('/posts', cors(), (req, res) => {
    const twitterData = require('../twitter.json').statuses;
    res.send( twitterData.map( ({text: message, user}) => ({ message, handle: user.screen_name, avatar: user.profile_image_url_https})) );
});

export default router;
