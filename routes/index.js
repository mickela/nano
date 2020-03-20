const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route GET /:code
// @ desc redirect to long/original url

router.get('/:code', (req, res, next)=>{
    try {
        const { code } = req.params;
        console.log(code);
        Url.findAll({ where: { urlCode: code } })
        .then(url => {
            if(url.length > 0){
                let sUrl = JSON.stringify(url);
                let pUrl = JSON.parse(sUrl)[0];
                
                res.redirect(pUrl.longUrl);
            }else{
                res.status(400).json('No url found');
            }
        })

    } catch (error) {
        console.error(error)
        res.status(500).json('Internal Server Error');
    }
});

module.exports = router;