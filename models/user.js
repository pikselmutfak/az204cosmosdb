const mongoose = require('mongoose');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.toJSON = function () {
  const o = this;

  const oObject = o.toObject();

  return _.pick(oObject, ['_id', 'firstName', 'lastName', 'age', 'createdAt']);
};

const User = mongoose.model('User', UserSchema);

module.exports = {User};