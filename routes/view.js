const express = require('express');
const Router = express.Router();
const authController = require('../controller/authController')
const viewController = require('../controller/viewController');


Router.get('/',viewController.getHome)
Router.get('/about',viewController.getAbout)
Router.get('/admin',authController.protect, viewController.getAdmin)
Router.get('/contact',viewController.getContact)
Router.get('/login',viewController.getLogin)
Router.get('/blog',viewController.getBlogs)
Router.get('/cause',viewController.getCause)
Router.get('/createCause',viewController.createCause)
Router.get('/createBlog',viewController.createBlog)


module.exports = Router