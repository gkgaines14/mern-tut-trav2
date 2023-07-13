const express = require('express');
const router = express.Router();
const controllers = require('../controllers/goalController');

router.route('/').get(controllers.getGoals).post(controllers.setGoals);
router
  .route('/:id')
  .put(controllers.updateGoals)
  .delete(controllers.deleteGoals);

module.exports = router;
