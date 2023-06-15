const router = require("express").Router();

router.get("/show-result", async(req, res) => {
    res.render("showResult");
})

module.exports = router;