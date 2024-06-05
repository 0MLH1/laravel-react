<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller{

    public function showLoginForm(){
        return view('forms.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if ($credentials['email'] == 'admin@gmail.com' && $credentials['password'] == 'admin@admin') {
            Auth::loginUsingId(1); 
            return redirect()->route('admin.dashboard');
        }else {
            return redirect()->to('http://localhost:3000/');
        }
        
    }

    public function failluer(){
        return view('forms.failled');
    }

    

}