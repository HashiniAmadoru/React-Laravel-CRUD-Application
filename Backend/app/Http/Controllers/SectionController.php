<?php

namespace App\Http\Controllers;

use App\Models\ProductSec;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Sections;
use Illuminate\Support\Facades\DB;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $users = DB::table('sections')->select('sections.*', DB::raw('count(productsec.section_id) as section_count') )->leftJoin('productsec', 'sections.id', '=', 'productsec.section_id')->groupBy('productsec.section_id')->get();
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
        Sections::create([
            'sName'=>$request->sName,
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
        return response()->json(Sections::whereId($id)->first());
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
       $updateSection = Sections::whereId($id)->first();

       $updateSection->update([
        'sName'=>$request->sName,
       ]);
       return response()->json(('success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {

        Sections::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
