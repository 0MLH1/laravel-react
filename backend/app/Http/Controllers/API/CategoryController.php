<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\Product;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    // this is the default method clled when we don't spesify the methode of the controller in the route 
    public function index()
    {
        $categories=Category::with('products')->get();
        return response()->json($categories);
    }
    
    public function indexed()
    {
        $categories = Category::with('products')->get();
        return view('admin/categories.create',compact('categories'));
    }


    

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        /** 
         * Here, $request->validated() is called
         * to retrieve only the validated data from the request.
        */
        $validated=$request->validated();
        $categorie=new Category();
        $categorie->name=$validated['name'];
        $categorie->description=$validated['description'];
        if($request->hasFile('avatar')){ // checks if the request contains a file input named avatar
            $avatar=$request->file('avatar');
            $filename=time() . '.'.$avatar->getClientOriginalExtension();
            $avatar->storeAs('public/categories',$filename); // stores the file in the 'public/categories' directory
            $categorie->avatar=$filename;
        }
        $categorie->save();//save to database
        return redirect()->route('success');
    
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $categories=Category::with('products')->find($id);
        if($categories == false){
            return response()->json(['error' => 'sorry ! category not found']);
        }
        else 
        {
            return response()->json($categories);
        }
    }

    public function update(Request $request, string $id)
    {
        $validated =$request->validate();

        $category = Category::findOrFail($id);
        $category->name = $validated['name'];
        $category->description = $validated['description'];

        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/categories',$filename);
            $category->avatar=$filename; 
        }
        
        $category->save();

        return redirect()->route('success');

    }


    public function destroy(string $id)
    { 
        $category = Category::find($id);
        if(!$category){
            return response()->json([
                'error' => 'category not found'
            ],404);
        }

        $category->delete();
        return redirect()->route('success');
    }
}
