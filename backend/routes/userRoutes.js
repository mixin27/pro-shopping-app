/**
 * User routes file.
 */
import express from 'express'

import { protect } from '../middlewares/auth.js'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route('/').post(registerUser)

export default router
