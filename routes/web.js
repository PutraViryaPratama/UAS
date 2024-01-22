const express = require('express');
const routes = express.Router();
const usersRoutes = require('./web/users_routes')
const authRoutes = require('./web/auth_routes')

routes.use('/auth', authRoutes);
routes.use('/users', usersRoutes);

module.exports = routes;