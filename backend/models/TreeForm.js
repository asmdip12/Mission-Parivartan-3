const mongoose = require("mongoose");

const TreeFormSchema = mongoose.Schema({
    fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength:50
  },
  department: {
    type: String,
    required: true,
    minlength: 5,
    maxlength:50
  },
  contactNo: {
    type: Number,
    required: true,
  },
  numPlaces: {
    type: Number,
    required: true,
  },
  places:[
    {
      location: {
        type: String,
        required: true,
      },
      numPlants: {
        type: Number,
        required: true,
      },
      owner: {
        type: String,
        required: true,
      },
      plantNames: {
        type: String,
        required: true,
      }
    }
  ],
  submittedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

TreeFormSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const TreeForm =  mongoose.models.Blog || mongoose.model("TreeForm",TreeFormSchema);

module.exports = TreeForm;