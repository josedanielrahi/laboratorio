<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Carreras;


class CarreraController extends Controller
{
    //mostrar carreras
    public function getCarreras()
    {
        return response()->json(Carreras::all(), 200);
    }
    //mostrar carreras por id
    public function getCarrerasById($id)
    {
        $carrera =  Carreras::find($id);
        if (is_null($carrera)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        return response($carrera, 200);
    }
    //insertar carrera 
    public function addcarrera(Request $request)
    {
        $carrera = Carreras::create($request->all());
        return response($carrera, 201);
    }
    //actualizar carrera
    public function updatecarrera(Request $request, $id)
    {
        $carrera =  Carreras::find($id);
        if (is_null($carrera)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $carrera->update($request->all());
        return response($carrera, 201);
    }
    //eliminar carrera
    public function deletecarrera(Request $request, $id)
    {
        $carrera =  Carreras::find($id);
        if (is_null($carrera)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $carrera->delete();
        return response()->json(null, 204);
    }
}
