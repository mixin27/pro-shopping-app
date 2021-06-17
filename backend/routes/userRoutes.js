/**
 * User routes file.
 */
import express from 'express'

import { admin, protect } from '../middlewares/auth.js'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/:id').delete(protect, admin, deleteUser)

export default router
