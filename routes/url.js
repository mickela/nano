const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');


// @route   POST /api/url/shorten
// @ desc   Create short URL

router.post('/shorten', async (req, res, next)=>{
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    // check base url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }
    // create url code
    const urlCode = shortid.generate();

    // check long url
    if(validUrl.isUri(longUrl)){
        try {
            let url = await Url.findAll({ where: { longUrl } });

            console.log(url)
            if(url.length > 0){
                res.json(url);
            }else{
                const shortUrl = baseUrl + '/' + urlCode;

                Url.create({
                    urlCode,
                    longUrl,
                    shortUrl,
                    date: new Date()
                }).then(response =>{

                    console.log(response)
                    res.json(response);

                }).catch(err => console.log(err))
                
            }
        } catch (error) {
            console.error(error);
            
            res.status(500).json('Internal Server error')
        }
    }else{
        res.status(400).json('Invalid long url');
    }
});

module.exports = router;