const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('game/game.ejs')
})

module.exports = router;