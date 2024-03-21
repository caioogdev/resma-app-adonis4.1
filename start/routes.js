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

Route.get('/showUsers', 'UserController.showUsers').middleware('auth')
Route.get('/showUser/:id', 'UserController.showUser').middleware('auth')
Route.patch('/editUser/:id', 'UserController.editUser').middleware('auth')
Route.post('/register', 'UserController.registerUsers').middleware('auth')
Route.delete('/delUser/:id', 'UserController.delUser').middleware('auth')
Route.post('/loginUser', 'UserController.loginUser')

Route.post('/registerResma', 'ResmaController.registerResma').middleware('auth')
