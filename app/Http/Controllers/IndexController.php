<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Session;

use App\Todo;

class IndexController extends Controller
{
    public function index() {
    	// url http://localhost:8000/testing/
    	$baseurl = explode('/', trim(url()->full(), '/'));
    	$baseurl = $baseurl[0] . '//' . $baseurl[2];

    	// store
        $all = Todo::where('deleted', '=', '0')->get();
    	$preloaded_store = [
    		'todoList' => $all
    	];

    	return view('index', [
    		'preloaded_store' => $preloaded_store,
    		'baseurl' => $baseurl
    	]);
    }
}
