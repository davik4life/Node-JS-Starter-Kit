//----------------------------------------------------------------------------//
//--------------------------Dependencies For Route----------------------------//
//----------------------------------------------------------------------------//

var express = require("express"),
      router = express.Router(),
      request = require("request");

//Default Route For Application (ONLY ROUTE AVALIABLE)
router.get("/", function(req, res){
  res.render("Index");
});


//----------------------------------------------------------------------------//
//--------------------------------Exports Data--------------------------------//
//----------------------------------------------------------------------------//

module.exports = router;
