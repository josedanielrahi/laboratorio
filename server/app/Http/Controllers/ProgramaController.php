<?php

namespace App\Http\Controllers;

use App\Models\Programa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgramaController extends Controller
{
    //

    public function getSemestres(){
        $query = DB::table('semestre')->get();
        return response()->json($query,200);
    }
    public function getTurno(){
        $query = DB::table('turno')->get();
        return response()->json($query,200);
    }
    public function getCiclo(){
        $query = DB::table('ciclo')->get();
        return response()->json($query,200);
    }
    public function getLab(){
        $query = DB::table('laboratorio')->get();
        return response()->json($query,200);
    }
    public function addPrograma (Request $request){
        $response = Programa::create($request->all());
        return response()->json($response,201);
    }
}
