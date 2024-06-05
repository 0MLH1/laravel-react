<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\AuthController;



Route::get('/', function () {
    return view('welcome');
});


Route::get('/admin/dashboardé(-è&_éàèè)=é_vné-&gsfsqql^qgdv', [AdminController::class,'index'])->name('admin.dashboard');

Route::get('/admin/dashboard/create-category-&é((èèyg(ç-àdhsvxguhftç-', [CategoryController::class,'indexed'])->name('categories.create');

Route::get('/admin/dashboard/create-product-(éç&nhfgdnfhfocn__ç(n', [ProductController::class,'indexed'])->name('products.create');




Route::get('/admin/dashboard/delete-product-ddgdgsjsbccvspzlsèdnfhfocnç_è-(xxcwe', [ProductController::class,'delete'])->name('products.delete');
Route::delete('/products/destroy',[ProductController::class,'destroy'])->name('products.destroy');

Route::get('/admin/dashboard/update-product-ddgdksjhxgfdswr(-yudoçs_uygdfsiç_uyg', [ProductController::class,'modify'])->name('products.modify');
Route::put('/products/update',[ProductController::class,'update'])->name('products.update');

Route::get('/login',[AuthController::class,'showLoginForm'])->name('forms.login');
Route::post('/login',[AuthController::class,'login']);
Route::get('/failled',[AuthController::class,'failluer'])->name('forms.failled');


Route::get('/success',[ProductController::class,'success'])->name('success');


Route::get('/error',[ProductController::class,'error'])->name('error');

