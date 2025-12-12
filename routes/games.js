/*
    MIT License
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
*/

import express from 'express';
import gameController from '../controllers/gamecontroller.js';

const router = express.Router();

// Auth middleware
const checkAuth = (req, res, next) => {
  if (!req.session.userId) return res.redirect('/login');
  next();
};

// Default route - redirect to game select
router.get('/', checkAuth, (req, res) => res.redirect('/games/select'));

// Game routes
router.get('/select', checkAuth, gameController.getGameSelect);
router.get('/breathing-bubble', checkAuth, gameController.getBreathingBubble);
router.get('/color-tap', checkAuth, gameController.getColorTap);
router.get('/grid-memory', checkAuth, gameController.getGridMemory);
router.get('/stress-ball', checkAuth, gameController.getStressBall);
router.post('/save', checkAuth, gameController.saveGameSession);

export default router;
