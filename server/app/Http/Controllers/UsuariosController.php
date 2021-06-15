<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use Illuminate\Http\Request;
use App\Models\Usuarios;
use Illuminate\Support\Facades\DB;

class UsuariosController extends Controller
{
    //

    public function conuntUsr()
    {
        return response()->json(Usuarios::count(), 200);
    }
    public function validateUsr($usr, $psw)
    {
        $query = DB::table('usuarios')
            ->select('usr', 'psw', 'id', 'rolId')
            ->where('usr', '=', $usr)
            ->where('psw', '=', $psw)
            ->first();
        return response()->json($query, 200);
    }
    public function cantAdm()
    {
        $query = DB::table('usuarios')
            ->where('rolId', '=', '1')
            ->count();
        return response()->json($query, 200);
    }
    public function cantProf()
    {
        $query = DB::table('usuarios')
            ->where('rolId', '=', '2')
            ->count();
        return response()->json($query, 200);
    }
    public function addUsr(Request $request)
    {
        $usuario = Usuarios::create($request->all());
        return response($usuario, 200);
    }
    public function getUsr()
    {
        return response()->json(Usuarios::all(), 200);
    }
    public function getUsrRol()
    {
        $join = DB::table('usuarios as u')
            ->join('roles as r', 'u.rolId', '=', 'r.id')
            ->select(
                'u.id',
                'u.usr',
                'u.psw',
                'u.created_at',
                'r.id as idRol',
                'r.nombre'
            )
            ->get();
        return response()->json($join, 200);
    }
    public function deleUsr(Request $request, $id)
    {
        $usuario = Usuarios::find($id);
        if (is_null($usuario)) {
            return response()->json(['message' => 'Elemento no ecnontrado'], 404);
        }
        $usuario->delete();
        return response()->json(null, 204);
    }
    public function UsrById($id)
    {
        $user = Usuarios::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'Elemento no ecnontrado'], 404);
        }
        return response()->json($user, 200);
    }
    public function updadateUsr(Request $request, $id)
    {
        $user =  Usuarios::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $user->update($request->all());
        return response($user, 201);
    }
}
