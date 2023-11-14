const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send("Using api route");
});

module.exports = router;