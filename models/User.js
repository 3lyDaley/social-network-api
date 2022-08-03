const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  thoughts: {
    type: String
  },
  friends: [{
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