<?php

namespace App\Http\Controllers;

use App\Models\Programa;
use App\Models\Detalle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgramaController extends Controller
{
    //
    public function updatePrograma (Request $request, $id){
        $query =  Programa::find($id);
        if (is_null($query)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $query->update($request->all());
        return response($query, 201);
    }
    public function deletePrograma($id){
        $carrera = Programa::find($id);
        if (is_null($carrera)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $carrera->delete();
        return response()->json(null, 204);
    }
    public function getSemestres()
    {
        $query = DB::table('semestre')->get();
        return response()->json($query, 200);
    }
    public function getTurno()
    {
        $query = DB::table('turno')->get();
        return response()->json($query, 200);
    }
    public function getCiclo()
    {
        $query = DB::table('ciclo')->get();
        return response()->json($query, 200);
    }
    public function getLab()
    {
        $query = DB::table('laboratorio')->get();
        return response()->json($query, 200);
    }
    public function addPrograma(Request $request)
    {
        $response = Programa::create($request->all());
        return response()->json($response, 201);
    }
    public function addProgramaDetails(Request $request)
    {
        $response = Detalle::create($request->all());
        return response()->json($response, 201);
    }
    public function detailsPrograma($id)
    {
        $query = DB::table('detalle_programa AS d')
            ->join('laboratorio AS l', 'd.laboratorioId', '=', 'l.id')
            ->where('d.programaId', '=', $id)
            ->select('d.id AS id_detalle', 'd.practica_no', 'd.practica_nombre', 'd.fechas', 'd.objetivo', 'd.laboratorioId', 'd.programaId', 'l.nombre')
            ->get();
        if (is_null($query)) {
            return response()->json(["message" => "Elemento no encontrado"], 404);
        }
        return response()->json($query, 201);
    }
    public function deleteProgramaDetails(Request $reques, $id)
    {
        $profesor = Detalle::find($id);
        if (is_null($profesor)) {
            response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $profesor->delete();
        return response()->json(null, 204);
    }
    public function lastInsertUsr($id)
    {
        $last = DB::table('programa AS p')
            ->select('p.id')
            ->where('p.profesorId','=', $id)
            ->orderby('created_at','DESC')
            ->take(1)
            ->get();
        return response()->json($last, 201);
    }
    public function getProgramaByIdValue($id){
        $programa =  Programa::find($id);
        if (is_null($programa)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        return response($programa, 200);
    }
    public function getProgramaById($id)
    {
        $query = DB::table('programa AS p')
            ->join('profesores AS ps', 'p.profesorId', '=', 'ps.id')
            ->join('carreras AS c', 'p.carreraId', '=', 'c.id')
            ->join('ciclo AS co', 'p.cicloId', '=', 'co.id')
            ->join('semestre AS s', 'p.semestreId', '=', 's.id')
            ->join('turno AS t', 'p.turnoId', '=', 't.id')
            ->where('p.id', '=', $id)
            ->select(
                'p.materia',
                'p.id AS programaId',
                'ps.nombre',
                'ps.apellidos',
                'c.nombre AS carreraNombre',
                'co.nombre AS cicloNombre',
                's.nombre AS semestreNombre',
                't.nombre AS turnoValue',
                'p.created_at',
                'p.horario'
            )
            ->get();
        if (is_null($query)) {
            return response()->json(["message" => "Elemento no encontraqdo"], 404);
        }
        return response()->json($query, 201);
    }
}
