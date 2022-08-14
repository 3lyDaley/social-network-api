const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller')

// GET all thoughts at `/api/thoughts`
router 
  .route('/')
  .get(getAllThoughts)
  .post(addThought);


// GET to get a single thought by its _id
// `api/thoughts/:thoughtId`
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

// `api/thoughts/:thoughtId/reactions/`
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

  
// `api/thoughts/:thoughtId/reactions/:reactionId`
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;
