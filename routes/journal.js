/*
    MIT License
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
*/

import express from 'express';
import journalController from '../controllers/journalcontroller.js';

const router = express.Router();

// Auth middleware
const checkAuth = (req, res, next) => {
  if (!req.session.userId) return res.redirect('/login');
  next();
};

// Default route - redirect to entries list
router.get('/', checkAuth, (req, res) => res.redirect('/journal/entries'));
router.post('/', checkAuth, (req, res) => res.redirect('/journal/entries'));

// Journal routes
router.get('/entries', checkAuth, journalController.getEntries);
router.get('/new', checkAuth, journalController.getNewEntry);
router.get('/:id/edit', checkAuth, journalController.getEditEntry);
router.get('/:id', checkAuth, journalController.getEntry);
router.post('/create', checkAuth, journalController.createEntry);
router.put('/:id/update', checkAuth, journalController.updateEntry);
router.delete('/:id', checkAuth, journalController.deleteEntry);

export default router;
