const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String
    // Unique
    // required
    // trimmed
  },
  email: {
    type: String
    // Unique
    // required
    // match valid email address
  },
  thoughts: {
    // Array of _id values referencing Thought model
  },
  friends: [{
    // Array of _id values referenceing the User model (self-ref)
    type: Schema.Types.ObjectId,
    ref: 'Friend'
  }]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
})

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
})
const User = model('User', UserSchema)

module.exports = User;