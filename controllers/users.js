const express = require("express")
const router = express.Router()
const User = require("../models/user.js")

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({})
    res.render('users/index.ejs', {
      users: allUsers,
      currentUser: req.session.user
    });
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.userId)
    res.render('users/show.ejs', {
      user: foundUser
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

module.exports = router
