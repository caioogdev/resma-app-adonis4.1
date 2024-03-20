'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')
const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/showUsers', 'UserController.showUsers')
Route.get('/showUser/:id', 'UserController.showUser')
Route.patch('/editUser/:id', 'UserController.editUser')
Route.post('/register', 'UserController.registerUsers')
Route.delete('/delUser/:id', 'UserController.delUser')
Route.post('/loginUser', 'UserController.loginUser')
