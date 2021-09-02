const { model, Schema } = require('mongoose');

const userSchema = new Schema({

  name: {
    type: String,
    requires: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

module.exports = model('User', userSchema);
