<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Laboratorio;
class LaboratorioController extends Controller
{
    //
    public function addLaboratorio(Request $request)
    {
        $lab = Laboratorio::create($request->all());
        return response($lab, 201);
    }
    public function getLaboratorio(){
        return response()->json(Laboratorio::all(),201);
    }


}
