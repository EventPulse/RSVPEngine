// server/routes/authRoutes.js
import express from 'express'
const router = express.Router()
import userController from '../controller/userController.js'

router.post('/login', userController.findUserByUsernameAndPassword, (req, res) => {
  res.status(200).json(res.locals.user)
})

export default router
