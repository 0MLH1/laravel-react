<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    // this is the default method clled when we don't spesify the methode of the controller in the route 
    public function index()
    {
        $product = Product::with('category')->get();
        return response()->json($product);
    } 

    public function success(){
        return view('success');
    }


    public function error(){
        return view('error');
    }

    public function indexed()
    {
        $products = Product::all();
        return view('admin/products.create');
    }



    

    public function show ($id){
        $product=Product::get()->find($id);
        if($product == false ){
         return response()->json([
             'error'=>'sorry! product do not exist '
         ]);
        }
        else {
         return response()->json($product);
        }
        
    }

    

    public function store(ProductRequest $request)
    {
        $category = Category::where('id', $request->category_id)->first();
        if(!$category){
            return redirect()->route('error');
        }

        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->category_id = $category->id;
        $product->price = $request->price;

        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/products',$filename);
            $product->avatar =$filename;
        }

        $product->save();

        return redirect()->route('success');
        
    }
    
    public function update(ProductRequest $request)
    {
        $category = Category::where('id',$request->category_id)->first();
        if(!$category){
            return redirect()->route('error');
        }

        $product = Product::where('id',$request->id)->first();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->category_id = $category->id;
        $product->price = $request->price;

        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/products' ,$filename);
            $product->avatar =$filename;
        }

        $product->save();

        return redirect()->route('success');

    }

    public function modify(){
        $products = Product::all();
        return view('admin/products.modify');
    }


    public function destroy(Request $request){
      $id = $request->input('product_id');
      $product = Product::find($id);
      if(!$product){
        return redirect()->route('error');
      }
      $product->delete();
      return redirect()->route('success');
    }

    public function delete()
    {
        return view('admin/products.delete');
    }

    
    public function search(Request $request){
        $product = Product::where("name","like","%{$request->name}%")->get();
            if($product){
                return response()->json($product) ;
            }
            else {
                return response()->json([
                    'error' => 'no product for this name'
                ]);
            }
    }

    

}
