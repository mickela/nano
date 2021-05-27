const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

const json = (data) => JSON.parse(JSON.stringify(data));

// @route GET all
// @desc fetch all short urls

router.get('/urls', (req, res, next)=>{
    Url.findAll()
    .then(url => res.json( json(url) ))
    .catch(error =>{
        console.log(error)
        res.status(500).json('Internal Server Error')
    })
})

// @route GET /:code
// @desc redirect to long/original url

router.get('/:code', (req, res, next)=>{
    try {
        const { code } = req.params;
        console.log(code);
        Url.findAll({ where: { urlCode: code } })
        .then(url => {
            if(url.length > 0){
                // let sUrl = JSON.stringify(url);
                // let pUrl = JSON.parse(sUrl)[0];

                res.redirect( json(url)[0].longUrl );
            }else{
                res.status(400).json('No url found');
            }
        })

    } catch (error) {
        console.error(error)
        res.status(500).json('Internal Server Error');
    }
});

// @route DELETE /:id
// @desc Delete url

router.delete('/:id', async (req, res, next)=>{
    try{
        const { id } = req.params;
        const response = await Url.destroy({ where: {id} });

        if(response === 1) res.json({ status: true, msg: 'Deleted successfully'});
        else res.json({ status: false, msg: 'URL does not exist' });
    }
    catch(err){
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
})


module.exports = router;
