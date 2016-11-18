import express from 'express';
import cors from 'cors';

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

export default router;
