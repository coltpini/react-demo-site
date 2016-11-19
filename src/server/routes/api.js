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

export default router;
