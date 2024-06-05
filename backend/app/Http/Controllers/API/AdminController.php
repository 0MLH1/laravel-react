<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class AdminController extends Controller
{
    public function index(){
        $products = Product::All();
        return view('admin.dashboard',compact('products'));
    }
}
