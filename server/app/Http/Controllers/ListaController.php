<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lista;
use App\Models\Alumno;
use Illuminate\Support\Facades\DB;

class ListaController extends Controller
{
    //
    public function getList($id)
    {
        $query =  DB::table('asistencia AS a')
            ->join('alumnos AS e', 'a.alumnoId', 'e.id')
            ->where('detalle_programaId', '=', $id)
            ->select('e.nombre', 'e.apellidos', 'e.matricula', 'a.observaciones', 'a.created_at')
            ->get();
        if (is_null($query)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }

        return response($query, 200);
    }
    public function alumno($mat)
    {
        $query = DB::table('alumnos')
            ->where('matricula', '=', $mat)
            ->first();
        return response()->json($query, 200);
    }
    public function addAlumno(Request $request)
    {
        $response = Alumno::create($request->all());
        return response()->json($response, 201);
    }
    public function addLista(Request $request)
    {
        $response = Lista::create($request->all());
        return response()->json($response, 201);
    }
}
