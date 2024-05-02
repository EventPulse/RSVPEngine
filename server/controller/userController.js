// server/controller/userController.js
import User from '../model/userModel.js'

const userController = {}

// Retrieve user records based on username and password
userController.findUserByUsernameAndPassword = async (req, res, next) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username, password })
    if (!user) {
      res.locals.login = false
      return res.status(404).json(res.locals.login)
    } else {
      res.locals.login = true
      return res.status(200).json(res.locals.login)
    }
  } catch (err) {
    return next({
      log: `userController.findUserByUsernameAndPassword: ERROR: ${err}`,
      status: 401,
      message: 'Error occurred in userController.findUserByUsernameAndPassword. Check server log for details'
    })
  }
}

export default userController
