/*
    MIT License
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
*/

import express from 'express';
import historyController from '../controllers/historycontroller.js';

const router = express.Router();

// Auth middleware
const checkAuth = (req, res, next) => {
  if (!req.session.userId) return res.redirect('/login');
  next();
};

// History routes
router.get('/activity', checkAuth, historyController.getActivityHistory);
router.get('/games', checkAuth, historyController.getGameHistory);
router.get('/quizzes', checkAuth, historyController.getQuizHistory);

export default router;
