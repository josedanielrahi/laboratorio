<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laboratorio extends Model
{
    public $timestamps = null;
    protected $fillable = ['nombre'];
    //use HasFactory;
}
