<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    protected $table="asistencia";
    protected $fillable =['alumnoId','observaciones','detalle_programaId'];
    use HasFactory;
}
