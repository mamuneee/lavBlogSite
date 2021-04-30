<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Controllers\Controller;
use App\Models\User;

class TestController extends Controller
{
    public function index(){
        return response()->json([
            'msg' => 'Return json'
        ]);
    }
}
