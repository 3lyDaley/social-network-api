const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema (
  {
    reactionId: {
      // use mongoose ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      // required
      // 280 Character Maximum
    },
    username: {
      type: String
      // required
    },
    createdAt: {
      type: Date,
      // set default value to current timestamp
      default: Date.now,
      // use a getter method to format timestamp on query
      get: createdAtVal => dateFormat(createdAtVal)
    }
  }
)

const ThoughtSchema = new Schema ({
  thoughtText: {
    type: String
    // Required
    // must be between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    // required
  },
  reactions: [ReactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;