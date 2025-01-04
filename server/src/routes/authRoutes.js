import express from 'express';
import { register, login, getCurrentUser, refreshToken } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.use(protect); // All routes after this middleware require authentication
router.get('/me', getCurrentUser);
router.post('/refresh-token', refreshToken);

export default router;