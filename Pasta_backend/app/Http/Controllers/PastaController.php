<?php

namespace App\Http\Controllers;

use App\Models\pasta_models;
use Illuminate\Http\Request;

class PastaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(pasta_models::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'amount' => 'required',
            'price' => 'required',
        ], [
            'name.required' => 'A név megadása kötelező',
            'category.required' => 'A kat megadása kötelező',
            'amount.required' => 'A mennyiség megadása kötelező',
            'price.required' => 'A ár megadása kötelező',
        ]);

        $entry = new pasta_models();
        $entry->name = $request->name;
        $entry->category = $request->category;
        $entry->amount = $request->amount;
        $entry->price = $request->price;

        $entry->save();

        return response()->json(['message' => 'Sikeres mentés']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $entry = pasta_models::find($id);

        if (!$entry) {
            return response()->json(['message' => 'A keresett termék nem található'], 404);
        }

        return response()->json($entry);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $entry = pasta_models::find($id);

        if (!$entry) {
            return response()->json(['message' => 'A keresett termék nem található'], 404);
        }

        if ($entry->delete()) {
            return response()->json(['message' => 'Sikeres törlés']);
        }

        return response()->json(['message' => 'Sikertelen törlés']);
    }
}
