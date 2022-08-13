const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller')

// GET all thoughts at `/api/thoughts`
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Get one, PUT updateUser, and DELETE 
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;