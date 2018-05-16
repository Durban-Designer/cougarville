var mongoose = require("mongoose");

var BarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  hours: {
          monday: {
              open: {
                  type: Number,
                  required: false
              },
              closed: {
                  type: Number,
                  required: false
              }
          },
          tuesday: {
            open: {
                type: Number,
                required: false
            },
            closed: {
                type: Number,
                required: false
            }
        },
        wednesday: {
            open: {
                type: Number,
                required: false
            },
            closed: {
                type: Number,
                required: false
            }
        },
        thursday: {
            open: {
                type: Number,
                required: false
            },
            closed: {
                type: Number,
                required: false
            }
        },
        friday: {
            open: {
                type: Number,
                required: false
            },
            closed: {
                type: Number,
                required: false
            }
        },
        saturday: {
            open: {
                type: Number,
                required: false
            },
            closed: {
                type: Number,
                required: false
            }
        },
        sunday: {
            open: {
                type: Number,
                required: false
            },
            closed: {
                type: Number,
                required: false
            }
        },
      },
  tags: {
    type: String,
    required: false
  },
  meta: {
      maleAverageAge: {
          type: Number,
          required: false
      },
      femaleAverageAge: {
          type: Number,
          required: false
      }
  },
  imageURL: {
    type: String,
    required: false
  },
  imageMapURL: {
    type: String,
    required: false
  }
})

var Bar = mongoose.model("Bar", BarSchema);

module.exports = Bar;
