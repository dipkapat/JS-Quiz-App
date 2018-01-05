var express = require("express");
var router = express.Router();

router.get("/quiz", function(req, res){
    res.render("quiz");
});

module.exports = router;