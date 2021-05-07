<?php

use Illuminate\Http\Request;
use Illuminate\Routing\RouteRegistrar;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Rutas de la tabla Carreras
//Todas las carreras
Route::get('/carreras', 'App\Http\Controllers\CarreraController@getCarreras');
//Carrera by id
Route::get('/carreras/{id}', 'App\Http\Controllers\CarreraController@getCarrerasById');
//insertar un elemento
Route::post('/addcarrera', 'App\Http\Controllers\CarreraController@addcarrera');
//actualizar carrera 
Route::put('/updatecarrera/{id}', 'App\Http\Controllers\CarreraController@updatecarrera');
//eliminar elemento 
Route::delete('/deletecarrera/{id}', 'App\Http\Controllers\CarreraController@deletecarrera');




//Roles
Route::post('/addrol', 'App\Http\Controllers\RolesController@addrol');
Route::put('/updaterol/{rolId}', 'App\Http\Controllers\RolesController@updaterol');
Route::get('/rol', 'App\Http\Controllers\RolesController@getrol');

//laboratorios
Route::post('/addlab', 'App\Http\Controllers\LaboratorioController@addLaboratorio');
Route::get('/laboratorio', 'App\Http\Controllers\LaboratorioController@getLaboratorio');

//Usuario
Route::get('/countusr', 'App\Http\Controllers\UsuariosController@conuntUsr');
Route::post('/addusr', 'App\Http\Controllers\UsuariosController@addUsr');
Route::get('/usuarios', 'App\Http\Controllers\UsuariosController@getUsr');
Route::get('/usrrol', 'App\Http\Controllers\UsuariosController@getUsrRol');
Route::get('/countadm', 'App\Http\Controllers\UsuariosController@cantAdm');
Route::get('/countprof', 'App\Http\Controllers\UsuariosController@cantProf');
Route::put('deleteusr/{id}', 'App\Http\Controllers\UsuariosController@deleUsr');
Route::put('validate/{usr}/{psw}', 'App\Http\Controllers\UsuariosController@validateUsr');

//Profesor
Route::get('profesores', 'App\Http\Controllers\ProfesorController@getProfesores');
Route::get('profesorById/{id}', 'App\Http\Controllers\ProfesorController@getProfesorById');
Route::put('deleteprof/{id}', 'App\Http\Controllers\ProfesorController@deleteProfesor');
Route::post('addprofesor', 'App\Http\Controllers\ProfesorController@addProfesor');
Route::get('profesorByIdUsr/{id}', 'App\Http\Controllers\ProfesorController@getProfesorByIdUsr');
Route::get('programaByIdProf/{id}','App\Http\Controllers\ProfesorController@getProgramaByIdProf');
Route::get('programaByIdUsr/{id}','App\Http\Controllers\ProfesorController@getProgramaByIdUsr');
//Programa
Route::get('semestre', 'App\Http\Controllers\ProgramaController@getSemestres');
Route::get('turno', 'App\Http\Controllers\ProgramaController@getTurno');
Route::get('ciclo', 'App\Http\Controllers\ProgramaController@getCiclo');
Route::get('lab', 'App\Http\Controllers\ProgramaController@getLab');
Route::post('addprograma', 'App\Http\Controllers\ProgramaController@addPrograma');
Route::post('addprogramadetalle', 'App\Http\Controllers\ProgramaController@addProgramaDetails');
Route::put('deletedetailsprogram/{id}','App\Http\Controllers\ProgramaController@deleteProgramaDetails');
Route::get('progrmadetaislbyid/{id}', 'App\Http\Controllers\ProgramaController@detailsPrograma');
Route::get('progrmaById/{id}', 'App\Http\Controllers\ProgramaController@getProgramaById');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
