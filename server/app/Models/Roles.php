<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    public $timestamps = false;
    protected $fillable = ['nombre'];
    //use HasFactory;
}
