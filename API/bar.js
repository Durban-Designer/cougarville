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
              start: {
                  type: Number,
                  required: false
              },
              end: {
                  type: Number,
                  required: false
              }
              open: {
                type: Boolean,
                required: false
              }
          },
          tuesday: {
            start: {
                type: Number,
                required: false
            },
            end: {
                type: Number,
                required: false
            }
            open: {
              type: Boolean,
              required: false
            }
        },
        wednesday: {
            start: {
                type: Number,
                required: false
            },
            end: {
                type: Number,
                required: false
            }
            open: {
              type: Boolean,
              required: false
            }
        },
        thursday: {
            start: {
                type: Number,
                required: false
            },
            end: {
                type: Number,
                required: false
            }
            open: {
              type: Boolean,
              required: false
            }
        },
        friday: {
            start: {
                type: Number,
                required: false
            },
            end: {
                type: Number,
                required: false
            }
            open: {
              type: Boolean,
              required: false
            }
        },
        saturday: {
            start: {
                type: Number,
                required: false
            },
            end: {
                type: Number,
                required: false
            }
            open: {
              type: Boolean,
              required: false
            }
        },
        sunday: {
            start: {
                type: Number,
                required: false
            },
            end: {
                type: Number,
                required: false
            }
            open: {
              type: Boolean,
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
