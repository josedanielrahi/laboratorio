<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    //
    public function addrol(Request $request)
    {
        $rol = Roles::create($request->all());
        return response($rol, 201);
    }
    public function updaterol(Request $request, $rolId)
    {
        $rol =  Roles::find($rolId);
        if (is_null($rol)) {
            return response()->json(['message' => 'Elemento no encontrado'], 404);
        }
        $rol->update($request->all());
        return response($rol, 201);
    }
    public function getrol(){
        return response()->json(Roles::all(), 200);
    }
}
