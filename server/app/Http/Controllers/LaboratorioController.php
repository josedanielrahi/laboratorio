<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Laboratorio;
use Illuminate\Support\Facades\DB;

class LaboratorioController extends Controller
{
    //
    public function addLaboratorio(Request $request)
    {
        $lab = Laboratorio::create($request->all());
        return response($lab, 201);
    }
    public function getLaboratorio()
    {
        return response()->json(Laboratorio::all(), 201);
    }
    public function labEdificio()
    {
        $query = DB::table('laboratorio as l')
            ->join('edificio as e', 'e.edificioId', '=', 'l.edificioId')
            ->get();
        return response()->json($query, 201);
    }
    public function getEdificios()
    {
        $query = DB::table('edificio')
            ->get();
        return response()->json($query, 201);
    }
    public function labsByEdificio($id)
    {
        $query = DB::table('laboratorio')
            ->where('edificioId','=',$id)
            ->get();
        return response()->json($query, 201);
    }
}
