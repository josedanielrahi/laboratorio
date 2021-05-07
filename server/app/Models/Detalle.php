<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detalle extends Model
{
    protected $table= "detalle_programa";
    public $fillable=[
        'practica_no',
        'practica_nombre',
        'objetivo',
        'laboratorioId',
        'fechas',
        'programaId'


    ];
    use HasFactory;

}
