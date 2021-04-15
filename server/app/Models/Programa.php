<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programa extends Model
{
    protected $table = "programa";
    public $fillable = [
        'carreraId',
        'materia',
        'cicloId',
        'semestreId',
        'turnoId',
        'profesorId'
    ];
    use HasFactory;
}
