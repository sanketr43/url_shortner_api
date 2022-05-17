const ShortUrl = require('../models/ShortUrl');
const router = require('express').Router();
const { simpleflake } = require('simpleflakes');


//create short url code
router.post('/create',async (req,res) => {
    //generate unique code
    const flakeBigInt = simpleflake();
    let unique_code = flakeBigInt.toString(36);  
    //save the Unique code
    const newShrortUrl = new ShortUrl({
        unique_code: unique_code,
        original_url: req.body.original_url
    });

    try{
        const { unique_code } = await newShrortUrl.save();
        res.status(201).json({ unique_code });
    }catch(error){
        res.status(500).json(error);
    }

});


//get long url from short url code
router.get('/get/:unique_code', async (req,res) => {
    try {
        const url = await ShortUrl.find({ unique_code: req.params.unique_code }, {_id: 0, original_url: 1,visits: 1});
        await ShortUrl.findOneAndUpdate({ unique_code: req.params.unique_code },{ visits: url[0].visits + 1 });
        res.status(201).json(url);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;