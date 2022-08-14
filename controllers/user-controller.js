const { User } = require('../models')


const userController = {
  // GET all users at `api/users`
  getAllUsers(req,res) {
    User.find({})
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
      .populate({
        path: 'friends',
        select: '-__v'
      })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    })
  },

  // GET a single user by its _id and populated thought and friend data
  getUserById({params}, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    })
  },

  // POST a new user
  createUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    })
  },

  // PUT to update a user by _id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData =>{
      if(!dbUserData) {
        res.status(404).json({message: 'No user found with this id!'})
      }
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err)
    })
  },
  
  // DELETE to remove user by _id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this ID!' });
          return;
        }
        res.json(dbUserData)
      })
      .catch(err => res.status(400).json(err));
  },

  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId  } },
      { new: true })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
  


}



// POST to add new friend to user's list
// DELETE to remove a friend from users list

module.exports = userController;