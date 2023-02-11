<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductSec;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('products')->select('products.*','sections.sName')->leftJoin('productsec', 'productsec.product_id', '=', 'products.id')->leftJoin('sections', 'sections.id', '=', 'productsec.section_id')->get();
   
        // $produts = Product::select('products.*','sections.sName')->join('productsec','productsec.product_id', '=', 'products.id')->join('sections','sections.id','=','productsec.section_id')
        // ->get();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'title' => $request->title,
            'pName' => $request->pName,
            'price' => $request->price,
            'category' => $request->category,
        ]);

        ProductSec::create([
            'section_id'=>$request->sName,
            'product_id'=>$product->id,

        ]);


        return response()->json('Successfully Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(Product::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateSection = Product::whereId($id)->first();

       $updateSection->update([
        'title'=>$request->title,
        'pName'=>$request->pName,
        'price'=>$request->price,
        'category'=>$request->category,
       ]);
       return response()->json(('success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        ProductSec::where("product_id",$id)->delete();
        Product::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
