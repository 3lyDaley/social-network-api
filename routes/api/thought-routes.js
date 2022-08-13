const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  deleteThought
} = require('../../controllers/thought-controller')

// GET all thoughts at `/api/thoughts`
router 
  .route('/')
  .get(getAllThoughts)
  .post(addThought);


// GET to get a single thought by its _id
router
  .route(':id')
  .get(getThoughtById)
  .delete(deleteThought)


module.exports = router;
