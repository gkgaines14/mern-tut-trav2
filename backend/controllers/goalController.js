const asynchHandler = require('express-async-handler');

// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler((req, res) => {
  res.status(200).json({ 'message': `Get goals` });
});

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field.');
  }

  res.status(200).json({ 'message': `${req.body.text}` });
  console.log(req.body);
});

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler((req, res) => {
  res.status(200).json({ 'message': `Update goals ${req.params.id}` });
});

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler((req, res) => {
  res.status(200).json({ 'message': `Delete goals ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
