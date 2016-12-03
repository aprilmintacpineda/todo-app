<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');
Route::get('{slug}', 'IndexController@index')->where('slug', '(?!api)([A-Za-z\/\-]+)');

Route::post('todos', 'TodosController@create_new');
Route::delete('todos/{id}', 'TodosController@delete');
Route::patch('todos/{id}', 'TodosController@edit');