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
    fetch('https://medium.com/mofed/latest?format=json')
        .then( response => response.text() )
        .then( response => {
            let json = JSON.parse(response.replace(`])}while(1);</x>`,``) );
            return json.payload.posts;
        })
        .then( articles => {
            res.send( articles.map( ({title, virtuals}) => ({title, teaser: virtuals.snippet, img: virtuals.previewImage.imageId !== '' ? `https://cdn-images-1.medium.com/max/1600/${virtuals.previewImage.imageId}` : `http://placekitten.com/g/300/170`}) ));
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
