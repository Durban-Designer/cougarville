var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var jwt = require('jsonwebtoken');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Bar = mongoose.model("Bar");
var User = mongoose.model("User");
// var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
jwtOptions.secretOrKey = 'LokisBreath-420';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  User.findOne({"_id": jwt_payload.id}, function(err, user) {
    if (err) {
          return next(err, false);
      }
      if (user) {
          return next(null, user);
      } else {
          return next(null, false);
      }
  });
});

// CREATE a new bar.
// TODO: make auth hook.
// router.post("/", passport.authenticate('jwt', { session: false }), (req,res) => {
router.post("/", (req,res) => {
  var newBar = new Bar({
  name: req.body.name.trim(),
  address: req.body.address.trim(),
  phone: req.body.phone,
  hours: req.body.hours,
  tags: req.body.tags === undefined ? "" : req.body.tags.trim(),
  meta: req.body.meta,
  imageURL: req.body.imageURL === undefined ? "" : req.body.imageURL.trim(),
  imageMapURL: req.body.imageMapURL === undefined ? "" : req.body.imageMapURL.trim()
  })

  Bar.find({"address": newBar.address},function (err, Bar) {
    if (err) {
      res.status(500).send(err);
    } else {
      var foundBar = Bar[0] || "";
      if (foundBar.name === undefined) {
        newBar.save((err, result) => {
          if(err) {
            res.status(500).send(err);
          } else {
            res.send(newBar);
          }
        })
      } else {
        res.send("This bar already exists.");
      }
    }
  })
 })

// Edit a bar
// TODO: make this require authentication.
// router.put("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
router.put("/:id", (req, res) => {
  var Barid = new mongodb.ObjectID(req.params["id"]);
  Bar.find({"_id": Barid},function (err, Bar) {
      if (err) {
          res.status(500).send(err);
      } else {
          var Bar = Bar[0];
          Bar.name = req.body.name || Bar.name;
          Bar.address = req.body.address || Bar.address;
          Bar.phone = req.body.phone || Bar.phone;
          Bar.hours = req.body.hours || Bar.hours;
          Bar.tags = req.body.tags || Bar.tags;
          Bar.meta = req.body.meta || Bar.meta;
          Bar.imageURL= req.body.imageURL || Bar.imageURL;
          Bar.imageMapURL= req.body.imageMapURL || Bar.imageMapURL;

          Bar.save(function (err, Bar) {
              if (err) {
                res.status(500).send(err)
              }
              res.send(Bar);
          });
        }
    });
})

// DELETE a bar.
// TODO: Auth.
router.delete("/:id", (req, res) => {
  var Barid = new mongodb.ObjectID(req.params["id"]);
  Bar.remove({"_id": Barid}, function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`Deleted bar with ID of ${Barid}`);
    }
  })
});

//   Bar.find({"_id": Barid},function (err, Bar) {
//       if (err) {
//           res.status(500).send(err);
//       } else {
//           // var Bar = Bar[0];
//           Bar.remove({"_id": Barid}, function (err, Bar) {
//             if (err) {
//               res.status(500).send(err)
//             } else {
//               res.send(`Deleted bar with ID of ${req.params["id"]}`);
//             }
//           });
//         }
//       });
// })

// GET is open to public.
router.get("/all", (req, res) => {
  Bar.find({})
    .limit(10)
    .sort({ name: "desc" })
    .exec(function(err, payload) {
      if (err) {
        next(err);
      } else {
        res.send(payload);
      }
    });
})

router.get("/test", (req, res) => {
    res.send("The test endpoint of the Bars API is active.");
})

// TODO: Implement delete but put behind an auth call.
// router.delete("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
//   var Barid = new mongodb.ObjectID(req.params["id"]);
//   Bar.find({_id: Barid}).remove().then(() => {
//     res.send("success");
//   })
// })

module.exports = router;
