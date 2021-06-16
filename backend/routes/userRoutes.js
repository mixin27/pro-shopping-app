/**
 * User routes file.
 */
import express from 'express'

import { protect } from '../middlewares/auth.js'
import { authUser, getUserProfile } from '../controllers/userController.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
