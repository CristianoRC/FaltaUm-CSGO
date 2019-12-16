'use strict'

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

Route.post("/usuario", "userController.criar");
Route.get("/usuario", "userControlle.listarTodos").middleware('auth');
Route.get("/usuario/:id", "userControlle.obterUsuario").middleware('auth');;
Route.put("/usuario/:id", "userControlle.AlterarDados").middleware('auth');
Route.post("/autenticacao", "AutenticacaoController.logar");
Route.put("/autenticacao", "AutenticacaoController.atualizarToken")
Route.post("/time", "teamControler.create")