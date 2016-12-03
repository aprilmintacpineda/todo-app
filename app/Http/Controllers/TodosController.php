<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;

use App\Todo;

class TodosController extends Controller
{
    public function create_new() {
    	$inputs = Input::all();

    	if (!isset($inputs['title'], $inputs['description'])) {
    		return response()->abort(405);
    	}

    	$todo = Todo::create([
    		'title' => $inputs['title'],
    		'description' => $inputs['description']
    	]);

    	return response()->json($todo);
    }

    public function delete($id) {
        $todo = Todo::findOrFail($id);
        $todo->deleted = 1;
        $todo->save();

        return response(200);
    }

    public function edit($id) {
        $inputs = Input::all();

        $todo = Todo::findOrFail($id);
        $todo->title = $inputs['title'];
        $todo->description = $inputs['description'];
        $todo->save();

        return response(200);
    }
}
