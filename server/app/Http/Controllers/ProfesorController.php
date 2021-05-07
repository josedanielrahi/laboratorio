<?php

namespace App\Http\Controllers;

use App\Models\Profesor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfesorController extends Controller
{
    //
    public function countProf()
    {
        return response()->json(Profesor::count(), 200);
    }
    public function getProfesores()
    {
        return response()->json(Profesor::all(), 200);
    }
    public function deleteProfesor(Request $reques, $id)
    {
        $profesor = Profesor::find($id);
        if (is_null($profesor)) {
            response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $profesor->delete();
        return response()->json(null, 204);
    }
    public function addProfesor(Request $request)
    {
        $profesor = Profesor::create($request->all());
        return response()->json($profesor, 201);
    }
    public function getProfesorById($id)
    {
        $query = Profesor::find($id);
        if (is_null($query)) {
            return response()->json(["message" => "Elemento no encontrado"], 404);
        }
        return response()->json($query, 201);
    }
    public function getProfesorByIdUsr($id)
    {
        $query = DB::table('profesores')->where('usrId', '=', $id)->get();
        if (is_null($query)) {
            return response()->json(["message" => "Elemento no encontrado"], 404);
        }
        return response()->json($query, 201);
    }
    public function getProgramaByIdProf($id)
    {
        $query = DB::table('programa')->where('profesorId', '=', $id)->first();
        if (is_null($query)) {
            return response()->json(["message" => "Elemento no encontraqdo"], 404);
        }
        return response()->json($query, 201);
    }
    public function getProgramaByIdUsr($id)
    {
        $query = DB::table('programa AS p')
            ->join('profesores AS ps', 'p.profesorId', '=', 'ps.id')
            ->join('carreras AS c', 'p.carreraId', '=', 'c.id')
            ->join('ciclo AS co', 'p.cicloId', '=', 'co.id')
            ->join('semestre AS s', 'p.semestreId', '=', 's.id')
            ->join('turno AS t','p.turnoId','=','t.id')
            ->where('ps.usrId', '=', $id)
            ->select('p.materia','p.id AS programaId','ps.nombre', 
            'ps.apellidos', 'c.nombre AS carreraNombre', 'co.nombre AS cicloNombre', 's.nombre AS semestreNombre', 
            't.nombre AS turnoValue')
            ->get();
        if (is_null($query)) {
            return response()->json(["message" => "Elemento no encontraqdo"], 404);
        }
        return response()->json($query, 201);
    }
}
